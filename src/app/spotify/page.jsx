"use client"
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Spotify() {
  const [cancion, setCancion] = useState("");
  const [canciones, setCanciones] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": "710bf0b17bmsha6d39e9cafefccdp1b03c7jsnddc034329300",
            "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
          },
        };

        let url = `https://spotify23.p.rapidapi.com/search/?q=top%20hits&type=multi&offset=0&limit=10&numberOfTopResults=5`;
        let data = await fetch(url, options);
        let res = await data.json();
        setCanciones(res.tracks.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Llamamos a la función fetchData directamente al montar el componente
    fetchData();
  }, []);

  function handleSearch(e) {
    e.preventDefault();
    if (cancion.trim() === "") {
      alert("Debes ingresar algo");
      return;
    }
    setCancion("");
    // Puedes comentar la siguiente línea para evitar hacer una búsqueda al escribir
    getSong(cancion);
  }

  async function getSong(cancion) {
    try {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "710bf0b17bmsha6d39e9cafefccdp1b03c7jsnddc034329300",
          "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
        },
      };

      let url = `https://spotify23.p.rapidapi.com/search/?q=${cancion}&type=multi&offset=0&limit=10&numberOfTopResults=5`;
      let data = await fetch(url, options);
      let res = await data.json();
      setCanciones(res.tracks.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div className="container mx-auto text-center">
      <h1>Elige qué escuchar</h1>
      <div className="p-5 d-flex justify-content-center">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={cancion}
            onChange={(e) => setCancion(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="btn btn-primary search-button">
            Buscar
          </button>
        </form>
      </div>

      <ul className="list-group">
        {canciones.map((cancion) => (
          <li
            key={cancion.data.uri}
            className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
          >
            <img
              src={cancion.data.albumOfTrack.coverArt.sources[0].url}
              alt={cancion.imagen}
              style={{ width: "60px", borderRadius: "50%", margin: "10px" }}
            />
            <p>
              <strong>Canción:</strong> {cancion.data.name}
            </p>
            <Link href={cancion.data.uri}>
              <button type="button" className="btn btn-light m-4 play-button">
                Play
              </button>
            </Link>
          </li>
        ))}
      </ul>

      <style jsx>{`
        /* Estilos para el input de búsqueda */
        .search-input {
          padding: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          margin-right: 0.5rem;
          width: 200px; /* Ajusta según sea necesario */
        }

        /* Estilos para el botón de búsqueda */
        .search-button {
          background-color: #007bff; /* Color de fondo azul */
          color: #fff; /* Texto en color blanco */
          font-weight: bold; /* Texto en negrita */
          border: 1px solid #007bff; /* Borde azul */
          transition: background-color 0.3s ease; /* Transición de color al pasar el ratón */
        }

        .search-button:hover {
          background-color: #0056b3; /* Cambio de color al pasar el ratón */
        }

        /* Estilos para el botón de Play */
        .play-button {
          background-color: #28a745; /* Color de fondo verde */
          color: #fff; /* Texto en color blanco */
          font-weight: bold; /* Texto en negrita */
          border: 1px solid #28a745; /* Borde verde */
          transition: background-color 0.3s ease; /* Transición de color al pasar el ratón */
        }

        .play-button:hover {
          background-color: #218838; /* Cambio de color al pasar el ratón */
        }
      `}</style>
    </div>
  );
}
