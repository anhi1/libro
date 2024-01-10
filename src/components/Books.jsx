import { useRouter } from "next/navigation";

export default function Books({ books }) {
  const router = useRouter();

  const navigateToBook = (id) => {
    router.push(`/books/${id}`);
  };

  return (
    <div>
      <ul className="list-group">
        {books.map((book) => (
          <li
            key={book.id}
            className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
          >
            <p>Título: {book.title}</p>
            <img src={book.photo} alt={book.photo} style={{ width: "100px" }} />
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigateToBook(book.id)}
            >
              Ver Detalles
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

