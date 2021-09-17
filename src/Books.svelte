<script>
  import Card from "./shared/Card.svelte";
  // import { onMount } from "svelte";

  //Callback för att fånga ett klick, jag skickar objectet inom ()
  export let showBookCard;
  export let books = [];

  // export let books = [];
  // onMount(() => {
  //   fetch("http://localhost:3000/books")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       books = data;
  //     });
  // });

  // $: books;
  // $: console.log("nu ändrar sig books", books);
</script>

<div>
  <!-- <button on:click={() => updateList(books)}>Uppdatera listan</button> -->
  <h1>Alla mina böcker</h1>
  <div class="card-container">
    {#each [...books].reverse() as book}
      <div class="book" on:click={showBookCard(book)}>
        <Card {book} />
      </div>
    {:else}
      <div>Hämtar böckerna</div>
    {/each}
  </div>
</div>

<style>
  .card-container {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  .book {
    cursor: pointer;
  }
</style>
