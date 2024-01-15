'use client'
import { useRouter } from "next/navigation";

export default function Books({ books }) {
  //propiedad
  const router = useRouter();
  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center">
      {books.map((book) => (
        <div key={book.id} className="card m-3" style={{ width: "400px" }}>
          <div className="row g-0">
            <div className="col-md-4 col-12">
              <img
                src={book.photo}
                className="img-fluid rounded-start"
                alt={book.photo}
                style={{ height: "200px", objectFit: "cover", width: "100%" }}
              />
            </div>
            <div className="col-md-8 col-12">
              <div className="card-body">
                <div className="card-title">
                  <p><strong>Título: </strong>{book.title}</p>
                  <button className="btn btn-light"
                    onClick={() => {
                      router.push(`/book/${book.id}`);
                    }}
                  >
                    ver
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}