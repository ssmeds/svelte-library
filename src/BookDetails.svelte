<script>
  export let showBook = {};
  export const URL = "http://localhost:3000/books";
  // export let statusChange;
  export let deleteBook;

  const statusChange = (id, status) => {
    let change;
    console.log("incoming status", status);
    change = !status;
    console.log("changed status", change);
    fetch(`${URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        status: change,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success in changing to true", data);
        // showBooks = data;
      });
    // doUpdate = !doUpdate;
  };

  $: console.log("book i bookDetail", showBook);
  $: showBook.status;
  $: console.log("showBook.status", showBook.status);
</script>

<div class="bookDetails">
  <img src={showBook.img} alt={showBook.title} />
  <div class="details">
    <p>Title: {showBook.title}</p>
    <p>Author: {showBook.author}</p>
    {#if showBook.status}
      <p>Utlånad: Ja</p>
    {:else}
      <p>Utlånad: Nej</p>
    {/if}
    <label for="lend"
      >{#if showBook.status}Lämna tillbaka {:else} Låna{/if}</label
    >
  </div>
  <div class="options">
    <p class="trash" on:click={deleteBook(showBook.id)}>&#128465;</p>
    <input
      type="checkbox"
      on:change={statusChange(showBook.id, showBook.status)}
      bind:checked={showBook.status}
      name="lend"
    />
  </div>
</div>

<div class="back">
  <a href="/">Tillbaka till alla böcker</a>
</div>

<style>
  .bookDetails {
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 5px solid rebeccapurple;
    border-radius: 10px;
    max-width: 400px;
    padding: 2rem;
    margin: 0 auto;
  }
  .back {
    margin-top: 2rem;
  }
  .options {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .trash {
    font-size: 50px;
    cursor: pointer;
    margin: 0;
  }
  input {
    margin-top: 4rem;
  }
</style>
