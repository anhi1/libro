"use client";
async function getBook(id) {
  const res = await fetch("https://json-book.vercel.app/books/" + id);
  const data = await res.json();
  return data;
}

export default async function BookDetails({ params }) {
  const book = await getBook(params.id);
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col">
          <img
            src={book.photo}
            alt={book.photo}
            style={{ width: "180px", borderRadius: "5%", margin: "10px" }}
          />
          <p>
            <strong>Título: </strong>
            {book.title}
          </p>
        </div>
        <div className="col-6">
          <p className="text-justify">
            <em>
              <strong>Sinopsis: </strong>
            </em>
            {book.sinopsis}
          </p>
        </div>
        <div className="col">
          <img
            src={book.user}
            alt={book.user}
            style={{ width: "60px", borderRadius: "50%", margin: "10px" }}
          />
          <p>
            <strong>Autor </strong>
            {book.author}
          </p>
          <p>
            <strong>Fecha </strong>
            {book.release}
          </p>
          <p>
            <strong>Género </strong>
            {book.genre}
          </p>
          <p>
            <strong>Páginas </strong>
            {book.pages}
          </p>
        </div>
      </div>
    </div>
  );
}
