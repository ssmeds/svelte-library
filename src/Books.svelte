<script>
  import { tick } from "svelte";
  // import { onMount } from "svelte";
  import Book from "./Book.svelte";
  // import BookStore from "./BooksStore";
  import { getData } from "./fetcher";

  // export let books = [];
  $: Books = getData("http://localhost:3000/books");
  $: console.log("Books", Books.data);
  // onMount(() => {
  //   fetch("http://localhost:3000/books")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("data from fetch", data);

  //       books = data;
  //     });
  // });

  // const response = getData("http://localhost:3000/books");
</script>

<div>
  <!-- {$BookStore} -->
  <h2>Alla mina böcker</h2>
  <!-- {#await response}
    <p>Data hämtas</p>
  {:then data} -->
  <!-- {#each Books as book}
    <Book {book} />
  {:else}
    <div>Hämtar fortfarande data</div>
  {/each} -->
  <!-- {:catch}
    <p>Datan kunde inte hämtas</p>
  {/await} -->
</div>

<style>
</style>
