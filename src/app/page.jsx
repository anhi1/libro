import Books from "@/components/Books";


async function getBooks() {
  const res = await fetch("http://localhost:3000/books");
  const data = await res.json();
  return data
}



export default async function BookList() {
  const books = await getBooks();
  return (
    <div>
      <Books books={books}/>     {/*  recibe como parametro una propiedad books  */}
    </div>
  );
}



