// src/app/favoritos/page.jsx

import React from 'react';
import Favoritos from '../../components/Favoritos';

const FavoritosPage = ({ favoriteBooks }) => {
  return (
    <div>
      <h1>Tus Libros Favoritos</h1>
      <Favoritos books={favoriteBooks} />
    </div>
  );
};

FavoritosPage.getInitialProps = async () => {
  try {
    // Leer el archivo JSON de la carpeta 'public'
    const res = await fetch('/books.json');
    const booksData = await res.json();

    // Seleccionar los 5 primeros libros como favoritos
    const favoriteBooks = booksData.slice(0, 5);

    return { favoriteBooks };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { favoriteBooks: [] };
  }
};

export default FavoritosPage;
