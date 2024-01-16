async function getBook(id) {
  const res = await fetch('https://json-book.vercel.app/books/' + id)
  const data = await res.json();
  return data
}

export default async function BookDetails({params}) {
 const  book = await getBook(params.id)
  return (
  <div>
    <h1>Detalle del libro</h1>
    <p>{book.title}</p>
    <p>{book.sinopsis}</p>
  </div>
  )
}

