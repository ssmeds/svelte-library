import { writable } from "svelte/store";

const BookStore = writable([])

async const fetchBooks = () => {
  let res = await fetch("http://localhost:3000/books")

  const data = await res.data()

  if (res.data) {
    return data
  } else {
    throw new Error(data)
  }
  //   .then(res => res.json())
  //   .then(data => {
  //     BookStore.set(data)
  //   })
  // // try {
  // //   let data = await response.json();
  // //   console.log('fetchdata from books', data);
  // //   BookStore.set(data)
  // // } catch (error) {
  // //   console.warn(error)
  // // }

};

let promise = fetchBooks();



export default BookStore;