<script>
  export let movie = {};
  import { deleteMovie } from "./fetcher";
</script>

<div class="box">
  <div class="card">
    <p>Titel: <span>{movie.title}</span></p>
    <p>Skådespelare: <span>{movie.actor}</span></p>
  </div>
  <p class="trash" on:click={() => deleteMovie(movie.id)}>&#128465;</p>
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
