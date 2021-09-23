<script>
  import Books from "./Books.svelte";
  import Movies from "./Movies.svelte";
  import Form from "./Form.svelte";

  export const bookURL = "http://localhost:3000/books";
  export const movieURL = "http://localhost:3000/movies";
</script>

<main>
  <h1>Välkommen till mitt bibliotek</h1>
  <Form />
  <div>
    <Books />
    <Movies />
  </div>
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

  div {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
