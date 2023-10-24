<script lang="ts">
  import teams from '$lib/data/teams.json'
  import {Avatar } from '@skeletonlabs/skeleton'
</script>

<section class="grid !grid-col-4 gap-2">
  <!-- Without this one the grid col is not workinh -->
  <article class=" col-span-4">
    
  </article>
  {#each teams.teams as team }
    
  <a class="card bi-initial card-hover overflow-hidden" href="teams/{team.id}">
    <header>
      <img src="..\src\lib\card-background.jpg" class="bg-black/50 w-full aspect-[16/9]" alt="Post" />
    </header>
    <div class="p-4 space-y-4">
      <h6 class="h6" data-toc-ignore>{team.history == '' ? 'Fresh out the box' : team.history}</h6>
      <h3 class="h3" data-toc-ignore>{team.name}</h3>
      <article>
        <p>
      {team.description}
        </p>
      </article>
    </div>
    <!-- <hr class="opacity-50" />
    <footer class="p-4 flex justify-start items-center space-x-4">
      <div class="flex-auto flex justify-between items-center">
        <h6 class="font-bold" data-toc-ignore>By Alex</h6>
        <small>On {new Date().toLocaleDateString()}</small>
      </div>
    </footer> -->
  </a>
  {/each}
 
</section>