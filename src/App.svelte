<script lang="ts">
    import "./app.css";
    import TaskLister from "$lib/components/custom/TaskLister/TaskLister.svelte";
    import TaskInput from "$lib/components/custom/TaskInput/TaskInput.svelte";
    import {ModeWatcher} from "mode-watcher";
    import FinderComp from "$lib/components/custom/FinderComp/FinderComp.svelte";
</script>

<main>
    <ModeWatcher></ModeWatcher>
    <FinderComp/>
    <TaskInput/>
    <TaskLister/>

</main>


<style>

    main {
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        padding: 10px;
        margin: 0;
    }


</style>