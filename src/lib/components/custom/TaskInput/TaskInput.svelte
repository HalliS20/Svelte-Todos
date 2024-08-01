<script lang="ts">
    import {Button} from "$lib/components/ui/button";
    import {Input} from "$lib/components/ui/input";
    import {todo} from "../../../../store";
    import {add} from "$lib/components/custom/todoUtils";
</script>


<form class="flex w-full max-w-sm items-center space-x-2">
    <Input bind:value={$todo} type="text"/>
    <Button on:click={() => add()}>Add</Button>
</form>
