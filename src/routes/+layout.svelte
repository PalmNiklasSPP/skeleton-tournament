<script lang="ts">
  import "../app.postcss";
  import {
    AppShell,
    AppBar,
    getDrawerStore,
    Avatar,
    Drawer,
  } from "@skeletonlabs/skeleton";
  import { initializeStores } from "@skeletonlabs/skeleton";
  // Floating UI for Popups
  import {
    computePosition,
    autoUpdate,
    offset,
    shift,
    flip,
    arrow,
    size,
    autoPlacement,
    hide,
    inline,
  } from "@floating-ui/dom";
  import { storePopup } from "$lib/utilities/palm-popup";
  import Navigation from "$lib/components/Navigation.svelte";
  import { AppRail, AppRailTile } from "@skeletonlabs/skeleton";
  import "@fortawesome/fontawesome-free/css/fontawesome.css";
  import "@fortawesome/fontawesome-free/css/brands.css";
  import "@fortawesome/fontawesome-free/css/solid.css";
  import { page } from '$app/stores';
  import SideBar from "$lib/components/SideBar/SideBar.svelte";

  initializeStores();
  storePopup.set({
    computePosition,
    autoUpdate,
    offset,
    shift,
    flip,
    arrow,
    size,
    autoPlacement,
    hide,
    inline,
  });

  let drawerStore = getDrawerStore();
  function drawerOpen(): void {
    drawerStore.open();
  }
  let currentTile: number = 0;
</script>

<Drawer>
  <Navigation />
</Drawer>
<!-- App Shell -->
<AppShell
  slotSidebarLeft="flex-none overflow-x-hidden overflow-y-auto bg-surface-50-900-token lg:w-auto"
>
  <svelte:fragment slot="header">
    <AppBar>
      <svelte:fragment slot="lead">
        <button class="md:hidden btn btn-sm mr-4" on:click={drawerOpen}>
          <span>
            <svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
              <rect width="100" height="20" />
              <rect y="30" width="100" height="20" />
              <rect y="60" width="100" height="20" />
            </svg>
          </span>
        </button>
        <strong class="text-xl uppercase">KöKampen</strong>
      </svelte:fragment>
      <svelte:fragment slot="trail">
        <a href="/profile">
          <Avatar
            src="..\src\lib\grid_0.png"
            initials="NP"
            width="w-10"
            cursor="cursor-pointer"
            background="bg-primary-500"
          />
        </a>
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>
  <svelte:fragment slot="sidebarLeft">
    <div
      class="grid grid-cols-[auto_1fr] h-full bg-surface-50-900-token border-r border-surface-500/30 hidden lg:grid w-[360px] overflow-hidden"
    >
	<SideBar></SideBar>
      <!-- <AppRail
        class="app-rail grid grid-rows-[auto_1fr_auto] overflow-y-auto bg-transparent border-r border-surface-500/30 w-20 h-full gap-0 "
      >
        <svelte:fragment slot="lead">
          <AppRailTile 
		  bind:group={currentTile}
		  name="tile-0"
          value={0}
          title="tile-0">
            <svelte:fragment slot="lead">
              <i class="fa-solid fa-house text-2xl" />
            </svelte:fragment>
            <span>Home</span>
          </AppRailTile>
        </svelte:fragment>
        <AppRailTile
          bind:group={currentTile}
          name="tile-1"
          value={1}
          title="tile-1"
        >
          <svelte:fragment slot="lead">
            <i class="fa-solid fa-people-group text-2xl" />
          </svelte:fragment>

          <span>Teams</span>
        </AppRailTile>
        <AppRailTile
          bind:group={currentTile}
          name="tile-2"
          value={2}
          title="tile-2"
        >
          <svelte:fragment slot="lead">
            <i class="fa-solid fa-ranking-star text-2xl" />
          </svelte:fragment>
          <span>Ranking</span>
        </AppRailTile>
        <AppRailTile
          bind:group={currentTile}
          name="tile-3"
          value={3}
          title="tile-3"
        >
          <svelte:fragment slot="lead">
            <i class="fa-solid fa-question text-2xl" />
          </svelte:fragment> <span>How to Play</span>
        </AppRailTile>
      </AppRail> -->
      <!-- <section class="p-4 pb-20 space-y-4 overflow-y-auto">
        <p class="font-bold pl-4 text-2xl">Teams</p>
      </section>
    </div> -->
    <!-- <div  class="hidden lg:block">
			<Navigation  />
		</div>	 -->
  </svelte:fragment>

  <!-- Router Slot -->
  <div class="container p-10 mx-auto">
    <slot />
  </div>
  <!-- ---- / ---- -->
</AppShell>
