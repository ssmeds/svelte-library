<script>
  export let onSubmit;
  export let title = "";
  export let author = "";

  // import { addBook } from "./AddBook";
  // import FetchBooks from "./FetchBooks";
  // export let books = [];
  // let url = "http://localhost:3000/books";
  // let title;
  // let author;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   let newBook = {
  //     title: title,
  //     author: author,
  //     status: false,
  //   };
  //   console.log("newBook i handleSubmit", newBook);
  //   addBook(newBook);
  //   document.querySelector("form").reset();
  // };
  // $: books;
  // $: console.log("Ändrar på books i Form", books);

  // export const [data, loading, error, get] = FetchBooks(url);
</script>

<form on:submit={onSubmit}>
  <input type="text" id="title" placeholder="Boktitel" bind:value={title} />
  <input type="text" id="author" placeholder="Författare" bind:value={author} />
  <button>Spara</button>
</form>

<style>
  /* your styles go here */
</style>
