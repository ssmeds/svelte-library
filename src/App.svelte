<script>
  import Form from "./Form.svelte";
  import Books from "./Books.svelte";
  import BookDetails from "./BookDetails.svelte";
  import { onMount } from "svelte";

  //URL för fetch
  export const URL = "http://localhost:3000/books";

  // State för att hantera böckerna
  export let books = [];
  export let doUpdate = false;

  // If routing
  export let showBooks = true;
  export let showBook = {};

  const showBookCard = (book) => {
    showBooks = false;
    showBook = book;
  };

  onMount(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log("data:", data);
        books = data;
      });
  });

  const onSubmit = (e) => {
    e.preventDefault();

    let newBook = {
      title: e.target.title.value,
      author: e.target.author.value,
      status: false,
    };
    fetch(URL, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newBook),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success in adding new book", data);
      })
      .catch((err) => {
        console.log("Nåt gick fel", err);
      });

    //Spara ny bok till state
    books.push(newBook);

    // Toggla doUpdate för att köra key
    doUpdate = !doUpdate;
    document.querySelector("form").reset();
  };

  const deleteBook = (id) => {
    fetch(`${URL}/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success in deleting book", data);
        window.location.href = "/";
      });
    doUpdate = !doUpdate;
  };

  $: showBook;
  $: console.log("Ändringar i showBook", showBook);
</script>

<main>
  <h1>Stinas bibliotek</h1>
  {#if showBooks}
    <Form {onSubmit} />
    {#key doUpdate}
      <Books {books} {showBookCard} />
    {/key}
  {:else}
    {#key doUpdate}
      <BookDetails {showBook} {deleteBook} />
    {/key}
  {/if}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
