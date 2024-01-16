"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

async function fetchData() {
  try {
    const response = await fetch("https://json-book.vercel.app/books");
    const data = await response.json();
    const imagenesDeLibros = data.map((libro) => libro.photo);
    return imagenesDeLibros;
  } catch (error) {
    console.error("Error al obtener datos:", error);
    return [];
  }
}

function MyCarousel() {
  const [imagenesDeLibros, setImagenesDeLibros] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const imagenes = await fetchData();
        console.log(imagenes); // Verifica las URL de las imágenes en la consola
        setImagenesDeLibros(imagenes);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    obtenerDatos();
  }, []);

  return (
    <Carousel data-bs-theme="dark">
      {imagenesDeLibros.map((imagen, index) => (
        <div key={index} className="carousel-item">
          <img
            className="d-block w-100"
            src={imagen}
            alt={`Libro ${index + 1}`}
            style={{ height: "500px", objectFit: "cover", width: "100%" }}
          />
        </div>
      ))}
    </Carousel>
  );
}

export default MyCarousel;
