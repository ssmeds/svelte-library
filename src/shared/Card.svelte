<script>
  export let book = {};
  // export let book;
</script>

<div class="card">
  <img src={book.img} alt={book.title} />
  <div>
    <p><span>Titel:</span> {book.title}</p>
    <p><span>Författare:</span> {book.author}</p>
    <p>
      <span>Status:</span>
      {#if book.status}
        <span class="out">Utlånad</span>
      {:else}
        <span class="in">Ej utlånad</span>
      {/if}
    </p>
  </div>
</div>

<style>
  .card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem;
    border: 1px solid rebeccapurple;
    border-radius: 10px;
    box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, 0.2);
    width: 300px;
    margin: 1rem;
    text-align: left;
  }
  span {
    font-weight: 600;
    font-size: 20px;
  }
  p {
    font-size: 18px;
  }
  img {
    height: 120px;
  }
  .out {
    color: red;
  }
  .in {
    color: green;
  }
</style>
