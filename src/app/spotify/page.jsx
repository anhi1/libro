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
          <button type="submit" className="btn btn-primary" style={{ background: "var(--color-tercero)" }}>
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
              <button type="button" className="btn btn-light m-4 play-button" style={{ background: "var(--color-tercero)", color:'white' }}>
                Play
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
