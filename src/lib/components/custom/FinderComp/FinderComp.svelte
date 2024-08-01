<script lang="ts">
    import {name} from "../../../../store";
    import {findUser} from "../todoUtils.js";

    let taskInput: HTMLInputElement;

    function activateInput() {
        if (taskInput) {
            taskInput.focus();
        }
    }
</script>


<div class="finding">
    <span class="hello">Hello</span>
    <div class="input-container">
        <input bind:this={taskInput} bind:value={$name} on:input={()=> findUser()} type="text"/>
        <span class="overlay" on:click={activateInput} on:keydown={(e) => e.key === 'Enter' && activateInput()}
              role="button"
              tabindex="0">{$name} !</span>

    </div>

</div>

<style>
    @import 'FinderComp.css';
</style>