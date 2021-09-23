<script>
  // import { onMount } from "svelte";
  import Movie from "./Movie.svelte";
  import { getData } from "./fetcher";
  // export let movies = [];

  // onMount(() => {
  //   fetch("http://localhost:3000/movies")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("data from moviefetch", data);

  //       movies = data;
  //     });
  // });

  const response = getData("http://localhost:3000/movies");
</script>

<div>
  <h2>Alla mina filmer</h2>
  {#await response}
    <p>Data hämtas</p>
  {:then data}
    {#each data as movie}
      <Movie {movie} />
    {:else}
      <div>Hämtar fortfarande data</div>
    {/each}
  {:catch}
    <p>Datan kunde inte hämtas</p>
  {/await}
</div>

<style>
</style>
