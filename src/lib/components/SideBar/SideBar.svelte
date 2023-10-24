<script lang="ts">
  import { page } from "$app/stores";

  import { AppRail, AppRailTile, AppRailAnchor } from "@skeletonlabs/skeleton";
  import { getDrawerStore } from "@skeletonlabs/skeleton";
  import { menuNavLinks } from "$lib/links";

  // Local
  let currentRailCategory: keyof typeof menuNavLinks | undefined = undefined;
  const drawerStore = getDrawerStore();

  function onClickAnchor(): void {
    currentRailCategory = undefined;
    drawerStore.close();
  }

  // Lifecycle
  page.subscribe((page) => {
    // ex: /basePath/...
    let basePath: string = page.url.pathname.split("/")[1];
    if (!basePath) return;
    // Translate base path to link section
    if (["home"].includes(basePath))
      currentRailCategory = "/home";
    if (["tournaments"].includes(basePath))
      currentRailCategory = "/tournaments";
    if (["stats"].includes(basePath))
      currentRailCategory = "/stats";
  });

  // Reactive
  $: submenu = menuNavLinks[currentRailCategory ?? "/home"];
  $: listboxItemActive = (href: string) =>
    $page.url.pathname?.includes(href) ? "bg-primary-active-token" : "";
</script>


<AppRail
class="app-rail grid grid-rows-[auto_1fr_auto] overflow-y-auto bg-transparent border-r border-surface-500/30 w-20 h-full gap-0 "
>
<svelte:fragment slot="lead">
  <AppRailTile 
  bind:group={currentRailCategory}
  name="home"
  value={'/home'}
>
    <svelte:fragment slot="lead">
      <i class="fa-solid fa-house text-2xl" />
    </svelte:fragment>
    <span>Home</span>
  </AppRailTile>
</svelte:fragment>
<AppRailTile
  bind:group={currentRailCategory}
  name="Tournaments"
  value={'/tournaments'}
>
  <svelte:fragment slot="lead">
    <i class="fa-solid fa-people-group text-2xl" />
  </svelte:fragment>

  <span>Tournaments</span>
</AppRailTile>
<AppRailTile
  bind:group={currentRailCategory}
  name="Stats"
  value={'/stats'}
  title="Stats"
>
  <svelte:fragment slot="lead">
    <i class="fa-solid fa-ranking-star text-2xl" />
  </svelte:fragment>
  <span>Stats</span>
</AppRailTile>
<AppRailTile
  bind:group={currentRailCategory}
  name="how-to-play"
  value={3}
  title="how-to-play"
>
  <svelte:fragment slot="lead">
    <i class="fa-solid fa-question text-2xl" />
  </svelte:fragment> <span>How to Play</span>
</AppRailTile>
</AppRail>

<section class="p-4 pb-20 space-y-4 overflow-y-auto">
    {#each submenu as segment, i}
        <!-- Title -->
        <p class="font-bold pl-4 text-2xl">{segment.title}</p>
        <!-- Nav List -->
        <nav class="list-nav">
            <ul>
                {#each segment.list as { href, label, badge }}
                    <li >
                        <a {href} class={listboxItemActive(href)} data-sveltekit-preload-data="hover">
                            <span class="flex-auto">{@html label}</span>
                            {#if badge}<span class="badge variant-filled-secondary">{badge}</span>{/if}
                        </a>
                    </li>
                {/each}
            </ul>
        </nav>
        <!-- Divider -->
        {#if i + 1 < submenu.length}<hr class="!my-6 opacity-50" />{/if}
    {/each}
</section>