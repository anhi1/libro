"use client"
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';

function MyCarousel() {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const response = await fetch("https://json-book.vercel.app/books");
        const data = await response.json();
        setLibros(data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    obtenerDatos();
  }, []);

  const generarCarrusel = (libros) => (
    <Carousel data-bs-theme="dark">
      {libros.map((libro, index) => (
        <Carousel.Item key={index}>
          <div className="d-flex justify-content-center">
            <img
              className="d-block w-100"
              src={libro.photo}
              alt={`Libro ${index + 1}`}
              style={{ height: "500px", objectFit: "cover", width: "32%" }}
            />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );

  const dividirLibrosEnGrupos = (libros) => {
    const grupos = [];
    for (let i = 0; i < libros.length; i += 3) {
      grupos.push(libros.slice(i, i + 3));
    }
    return grupos;
  };

  // Muestra solo los primeros 3 grupos de libros
  const gruposDeLibros = dividirLibrosEnGrupos(libros).slice(0, 3);

  const titulosCarruseles = ["Más Leídos", "Más Valorados", "Más Comentados"];

  return (
    <div className="p-5 d-flex justify-content-around">
      {gruposDeLibros.map((grupo, index) => (
        <div key={index}>
          <h3>{titulosCarruseles[index]}</h3>
          {generarCarrusel(grupo)}
        </div>
      ))}
    </div>
  );
}

export default MyCarousel;
