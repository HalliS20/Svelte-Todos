import {createUser, getUserByName, getUserTasksByName} from "../../../services/userService";
import type {TaskType} from "src/types/taskType";
import {lissie, name, todo, user} from "../../../store";
import {get} from "svelte/store";
import {createTask, removeTask, updateDone} from "../../../services/taskService";


async function findUser() {
    lissie.set([]);
    let tasks = await getUserTasksByName(get(name));

    for (let task of tasks) {
        let foundTask: TaskType = {
            id: task.id,
            name: task.name,
            user: task.user,
            done: task.done
        }

        lissie.set([...get(lissie), foundTask]);
    }
}

function remove(id: string | undefined) {
    if (!id) {
        return;
    }
    lissie.set(get(lissie).filter((item, _) => item.id !== id));
    removeTask(id).then(console.log).catch(console.error);
}

function updateChecked(item: TaskType) {
    item.done = !item.done;
    updateDone(item).then(console.log).catch(console.error);
}

async function add() {
    user.set(await getUserByName(get(name)));
    let gotUser = get(user);
    let userid = "0";
    if (gotUser) {
        userid = gotUser.id;
    } else {
        console.log("Creating user");
        await createUser({username: get(name), password: "password", passwordConfirm: "password"});
        user.set(await getUserByName(get(name)));
        gotUser = get(user);
        if (gotUser) {
            userid = gotUser.id;
        }
    }
    let task = {
        name: get(todo),
        user: userid,
        done: false,
    }
    await createTask(task)
    lissie.set(await getUserTasksByName(get(name)));
}

export {findUser, remove, updateChecked, add};
