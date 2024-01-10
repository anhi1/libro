// src/components/Favoritos.jsx

import React from 'react';

const Favoritos = ({ books }) => {
  if (!books || books.length === 0) {
    return <p>No hay libros favoritos disponibles.</p>;
  }

  return (
    <div className="carousel">
      {books.map((book) => (
        <div key={book.id} className="book-card">
          <img src={book.image} alt={book.title} />
          <h3>{book.title}</h3>
          <p>{book.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Favoritos;
