import {type Writable, writable} from "svelte/store";
import type {RecordModel} from "pocketbase";
import type {TaskType} from "src/types/taskType";

export const todo = writable("todo");
export const name = writable("World");
export const user: Writable<RecordModel | null> = writable(null);

export const lissie = writable<TaskType[]>([]);