<script>
  export let book = {};
  import { deleteBook } from "./fetcher";
</script>

<div class="box">
  <div class="card">
    <p>Titel: <span>{book.title}</span></p>
    <p>Författare: <span>{book.author}</span></p>
  </div>
  <p class="trash" on:click={() => deleteBook(book.id)}>&#128465;</p>
</div>

<style>
  .box {
    margin: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
  .card {
    display: flex;
    flex-direction: column;
  }
  p {
    font-weight: 600;
    align-items: baseline;
    margin: 0.2rem;
  }
  .trash {
    font-size: 65px;
    cursor: pointer;
  }
  span {
    font-weight: 400;
    font-style: italic;
  }
</style>
