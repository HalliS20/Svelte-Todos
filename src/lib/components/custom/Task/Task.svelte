<script lang="ts">

    import type {TaskType} from "src/types/taskType.ts";
    import {Checkbox} from "$lib/components/ui/checkbox";
    import {remove, updateChecked} from "../todoUtils";

    export let item: TaskType;


</script>

<div class="task border border-accent-foreground">
    <Checkbox checked={item.done} onCheckedChange={() => updateChecked(item)}/>
    <button class="taskText" on:click={()=>remove(item.id)}>{item.name}</button>
</div>

<style>
    @import 'Task.css';
</style>