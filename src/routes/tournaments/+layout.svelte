<script>
  import { Avatar } from "@skeletonlabs/skeleton";
</script>

<svelte:head>
  <title>Name of tournament</title>
  <meta name="description" content="Tournament overview" />
</svelte:head>
<section class="w-full rounded-md p-4 variant-glass-surface">
  <div class="flex flex-row justify-between w-full">
    <div class="tournament-data">
      <h2 class="h2">Pool Guys</h2>
      <div class="flex">
        <div class="flex mr-6">
          <span class="badge-icon bg-filled mr-2"
            ><i class="fa-solid fa-user" />
          </span>
          <p>0 Players</p>
        </div>
        <div class="flex mr-6">
          <span class="badge-icon bg-filled mr-2"
            ><i class="fa-solid fa-trophy" />
          </span>
          <p>Single Elimination</p>
        </div>
        <div class="flex mr-6">
          <span class="badge-icon bg-filled mr-2"
            ><i class="fa-solid fa-gamepad" />
          </span>
          <p>8-Ball</p>
        </div>
        <div class="flex">
          <span class="badge-icon bg-filled mr-2"
            ><i class="fa-solid fa-calendar" />
          </span>
          <p>October 25, 2023</p>
        </div>
      </div>
    </div>
    <div class="tournament-misc flex items-center mr-6">
      <Avatar
        src="..\src\lib\grid_0.png"
        initials="NP"
        cursor="cursor-pointer"
        background="bg-primary-500"
        border="border-4 border-surface-300-600-token  hover:!border-primary-500"
      />
      <p class="mr-8 ml-4">
        Organizer: <br /><span class="text-tertiary-500">@PalmNiklas</span>
      </p>
      <span class="chip variant-soft hover:variant-filled">
        <span><i class="fa-solid fa-share-nodes" /></span>
        <span>Share</span>
      </span>
    </div>
  </div>
</section>
<slot />
