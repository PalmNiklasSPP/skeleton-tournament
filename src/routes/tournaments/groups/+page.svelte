<svelte:head>
	<title>Grouping</title>
	<meta name="description" content="Grouping" />
</svelte:head>


<section class="m-4">
    <div class="grid gap-2 grid-cols-2 auto-rows-auto">
	{#each mappedGroups as group, i}
    <article class="card !bg-transparent card-hover overflow-hidden pt-2 rounded-md">
        <h2 class="h2 mx-2 mb-2 ">{groups[i].groupName}</h2>
        <Table  source={group} text="text-token" />
    </article>
        {/each}
    </div>
</section>

<script lang="ts">
    import { Table } from '@skeletonlabs/skeleton';
    import type { TableSource } from '@skeletonlabs/skeleton';
	import { tableMapperValues } from '@skeletonlabs/skeleton';
    import {groups} from '$lib/data/groups.json';


let mappedGroups: TableSource[];
mappedGroups = new Array();
groups.forEach(group => {
    let tableSourceTemplate: TableSource = {
        head: ['Name', 'Played', 'Win', 'Draw', 'Loss'],
        body: tableMapperValues(group.teams, ['name', 'played','wins', 'draws', "losses"]),
    }
    mappedGroups.push(tableSourceTemplate)

});

  



</script>