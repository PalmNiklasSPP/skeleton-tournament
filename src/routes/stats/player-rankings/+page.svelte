<svelte:head>
	<title>Rankings</title>
	<meta name="description" content="Rankings" />
</svelte:head>

<!-- <Table  source={tableSource} text="text-token"interactive={true} on:selected={mySelectionHandler}  /> -->
<PalmTable source={tableSource} text="text-token"interactive={true} on:selected={mySelectionHandler}  />   
<!-- <div use:popup={popupHover} class="[&>*]:pointer-events-none h-10 bg-initial" >
    test
</div> -->

<!-- <div class="card p-4 w-72 shadow-xl" data-popup="popupHover">
    <div class="space-y-4">
        <Avatar src="src\lib\grid_0.png" width="w-16" />
        <div>
            <div class="flex">
                <p class="font-bold">Niklas Palm</p>
                <p class="ml-1">#1</p>
            </div>
            <p class="opacity-50">@NickeP</p>
        </div>
        <p>Skilled and strategic navigates the pool table with precision, turning complex shots into art and making the cue ball dance to their tune.</p>
        <div class="flex gap-4">
            <small><strong>7</strong> <span class="opacity-50">Wins</span></small>
            <small><strong>2</strong> <span class="opacity-50">Losses</span></small>
            <small><strong>9</strong> <span class="opacity-50">Played</span></small>
        </div>
    </div>
    <div class="arrow bg-surface-100-800-token" />
</div> -->

<script lang="ts">
    import { Table, Avatar} from '@skeletonlabs/skeleton';
    import type { PopupSettings, TableSource } from '@skeletonlabs/skeleton';
	import { tableMapperValues, popup } from '@skeletonlabs/skeleton';
    import {players} from '$lib/data/ranks.json';
    import PalmTable from '$lib/components/PalmTable/PalmTable.svelte';

        

//     const popupHover: PopupSettings = {
// 	event: 'hover',
// 	target: 'popupHover',
// 	placement: 'top'
// };
function mySelectionHandler(){
    window.location.href = '/profile';
}

let mappedRanks: TableSource[];
    let tableSource: TableSource = {
        head: ['Rank', 'Name', 'Score'],
        body: tableMapperValues(players, ['ranking', 'name', 'score']),
    }


  



</script>