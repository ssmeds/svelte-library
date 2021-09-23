<script>
  export const fetchURL = "http://localhost:3000/";

  import { updateData } from "./fetcher";

  export let title = "";
  export let author_actor = "";
  export let movie_book = "";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit form");
    movie_book = document.querySelector("#movie_book").value;
    console.log("Movie or book:", movie_book);
    document.querySelector("form").reset();

    if (movie_book == "movie") {
      let newMovie = {
        title: title,
        actor: author_actor,
      };

      fetch(`${fetchURL}movies`, {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newMovie),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("data from posting a new movie", data);
          updateData("http://localhost:3000/movies");
        });
    } else {
      let newBook = {
        title: title,
        author: author_actor,
      };

      fetch(`${fetchURL}books`, {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newBook),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("data from posting a new book", data);
          updateData("http://localhost:3000/books");
        });
    }
  };
</script>

<form on:submit={handleSubmit}>
  <input type="text" id="title" placeholder="Titel" bind:value={title} />
  <input
    type="text"
    id="author_actor"
    placeholder="Författare/Skådespelare"
    bind:value={author_actor}
  />
  <select id="movie_book">
    <option value="movie">Film</option>
    <option value="book">Bok</option>
  </select>
  <button>Spara</button>
</form>

<style>
</style>
