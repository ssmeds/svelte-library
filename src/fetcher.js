

export async function getData(url) {
  const response = await fetch(url)
  const data = await response.json()
  console.log('getData', data);
  return data
}

export async function updateData(url) {
  const response = await fetch(url)
  const data = await response.json()
  console.log('updateData', data);
  return data
}

export const deleteBook = (id) => {
  const bookURL = 'http://localhost:3000/books'
  console.log('book-id', id);
  console.log('urlen till boken som ska deletas', `${bookURL}/${id}`);
  fetch(`${bookURL}/${id}`, {
    method: 'delete'
  })
  getData(bookURL)
  // )
  // const data = await response.json()
  // console.log('data from deleting a book', data);
  // return data
}

export const deleteMovie = async (id) => {
  console.log('movie-id', id);
  const response = await fetch(`http://localhost:3000/movies/${id}`, {
    method: 'delete'
  }
  )
  const data = await response.json()
  return data
}