// import { InMemoryDatabase } from "$lib/storage/memory";
// import { BracketsManager } from "brackets-manager";
// import {
//   dataset16,
//   dataset2,
//   dataset32,
//   dataset4,
//   dataset8,
// } from "$lib/data/brackets-dataset";
// import type { Dataset } from "$lib/utilities/dataset";
// import { browser } from "$app/environment";
// import { onMount } from "svelte";

// export async function load({}) {
//   if (browser)
//     await process(dataset16).then((data) => {
//       console.log(data);
//       window.bracketsViewer.render(data);
//     });
// }

// const TOURNAMENT_ID = 0;

// function getNearestPowerOfTwo(input: number): number {
//   return Math.pow(2, Math.ceil(Math.log2(input)));
// }

// async function process(dataset: Dataset) {
//   console.log("test2");
//   const db = new InMemoryDatabase();
//   const manager = new BracketsManager(db);
//   db.setData({
//     participant: dataset.roster.map((player) => ({
//       ...player,
//       tournament_id: TOURNAMENT_ID,
//     })),
//     stage: [],
//     group: [],
//     round: [],
//     match: [],
//     match_game: [],
//   });

//   await manager.create.stage({
//     name: dataset.title,
//     tournamentId: TOURNAMENT_ID,
//     type: dataset.type,
//     seeding: dataset.roster.map((player) => player.name),
//     settings: {
//       seedOrdering: ["inner_outer"],
//       size: getNearestPowerOfTwo(dataset.roster.length),
//     },
//   });

//   const data = await manager.get.stageData(0);

//   return {
//     stages: data.stage,
//     matches: data.match,
//     matchGames: data.match_game,
//     participants: data.participant,
//   };
// }
