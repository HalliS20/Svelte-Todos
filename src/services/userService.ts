import client from './pocketbase';
import type {RecordModel} from "pocketbase";
import {fetchTasks} from "./taskService";
import type {UserType} from "../types/userType";
import type {TaskType} from "../types/taskType";

async function fetchUsers(): Promise<RecordModel[]> {
    try {
        const response = await client.collection('users').getList();
        return response.items;
    } catch (error) {
        console.error("Failed to fetch users", error);
        return []; // Return an empty array in case of an error
    }
}

async function findUserById(id: string): Promise<RecordModel | null> {
    try {
        const response = await client.collection('users').getOne(id);
        return response.item;
    } catch (error) {
        console.error("Failed to find user", error);
        return null; // Return null in case of an error
    }
}


async function getUserByName(name: string) {
    try {
        const records = await client.collection('users').getFullList({
            filter: `username = "${name}"`,
            sort: '-created',
        });

        // Since we're looking for a single user, we return the first match
        return records.length > 0 ? records[0] : null;
    } catch (error) {
        console.error('Error fetching user:', error);
        return null;
    }
}

async function getUserTasksByName(name: string) {
    try {
        const user = await getUserByName(name);
        if (!user) {
            return [];
        }
        const tasks = await fetchTasks();
        const filtered = tasks.filter(task => task.user === user.id);
        let taskTyped: TaskType[] = [];
        filtered.forEach(task => {
            taskTyped.push({
                name: task.name,
                user: task.user,
                done: task.done,
                id: task.id,
            });
        });
        return taskTyped;

    } catch (error) {
        console.error('Error fetching user tasks:', error);
        return [];
    }
}

async function createUser(user: UserType): Promise<RecordModel | null> {
    console.log('Creating user:', user);
    try {
        const response = await client.collection('users').create(user);
        return response.item;
    } catch (error) {
        console.error('Error creating user:', error);
        return null;
    }
}

export {
    fetchUsers,
    findUserById,
    getUserByName,
    getUserTasksByName,
    createUser
};