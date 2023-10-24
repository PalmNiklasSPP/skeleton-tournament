<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';
let drawerStore = getDrawerStore();
	function drawerClose(): void {
	drawerStore.close();
	}
</script>

<nav class="list-nav p-4">
	<ul>
		<li><a href="/grouping" on:click={drawerClose}>Groups</a></li>
		<li><a href="/teams" on:click={drawerClose}>Teams</a></li>
		<li><a href="/rankings" on:click={drawerClose}>Rankings</a></li>
		<li><a href="/?test=3" on:click={drawerClose}>Brackets</a></li>
	</ul>
</nav>


