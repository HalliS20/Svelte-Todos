<script lang="ts">
    import Task from "../Task/Task.svelte";
    import {lissie} from "../../../../store";
</script>

<div class="lists">
    {#each $lissie as item}
        <Task {item}/>
    {/each}
</div>

<style>
    @import 'TaskLister.css';
</style>