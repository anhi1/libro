'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap'; // Asegúrate de importar Carousel desde react-bootstrap
import { useEffect, useState } from 'react';


async function fetchData() {
  try {
    const response = await fetch('/books.json');
    const data = await response.json();

    // Extraer solo las URLs de las imágenes
    const imagenesDeLibros = data.books.map(libro => libro.photo);

    return imagenesDeLibros;
  } catch (error) {
    console.error('Error al obtener datos:', error);
    return [];
  }
}

function MyCarousel() {
  const [imagenesDeLibros, setImagenesDeLibros] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      const imagenes = await fetchData();
      setImagenesDeLibros(imagenes);
    };

    obtenerDatos();
  }, []);

  
  return (
    <Carousel>
      {imagenesDeLibros.map((imagen, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={imagen} alt={`Libro ${index + 1}`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MyCarousel;