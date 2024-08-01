// src/services/taskService.ts
import client from './pocketbase';
import type {RecordModel} from "pocketbase";
import type {TaskType} from "../types/taskType";

async function fetchTasks(): Promise<RecordModel[]> {
    try {
        const response = await client.collection('tasks').getList();
        return response.items;
    } catch (error) {
        console.error("Failed to fetch tasks", error);
        return []; // Return an empty array in case of an error
    }
}

async function createTask(task: TaskType): Promise<RecordModel | null> {
    try {
        return await client.collection('tasks').create(task);
    } catch (error) {
        console.error("Failed to create task", error);
        return null; // Return null in case of an error
    }
}

async function removeTask(id: string): Promise<boolean> {
    try {
        await client.collection('tasks').delete(id);
        return true;
    } catch (error) {
        console.error("Failed to remove task", error);
        return false;
    }
}

async function updateDone(task: TaskType): Promise<boolean> {
    try {
        if (task.id === undefined) {
            console.error("Task ID is undefined");
            return false;
        }
        await client.collection('tasks').update(task.id, task);
        return true;
    } catch (error) {
        console.error("Failed to update task", error);
        return false;
    }
}

export {fetchTasks, createTask, removeTask, updateDone};