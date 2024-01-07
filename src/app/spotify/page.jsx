"use client";
import { useState } from "react";
import Link from "next/link";

function Spotify() {
  const [cancion, setCancion] = useState(""); //-----------(1)
  const [canciones, setCanciones] = useState([])

  function handleSearch(e) {//voy ah recibir un parametro (3)
    e.preventDefault(); //para que no recargue la pagina
    if (cancion.trim() ==="") {
      alert("Debes ingresar algo");
      return;
    }
    setCancion(""); //reinicie el input
    getSong(cancion); //handleSearch invoca la función getSong(cancion) para obtener información sobre la canción
  }



  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '710bf0b17bmsha6d39e9cafefccdp1b03c7jsnddc034329300',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };

  async function getSong(cancion) {
    try {
      let url = `https://spotify23.p.rapidapi.com/search/?q=${cancion}&type=multi&offset=0&limit=10&numberOfTopResults=5`;
      let data = await fetch(url, options)
      let res = await data.json()
      setCanciones(res.tracks.items);
    } catch (error) {
      console.log(`error`);
    }
  }



  return (
    <>
      <h1>Spotify</h1>
      <form onSubmit={handleSearch}>   
        <input type="text" value={cancion} onChange={(e) => setCancion(e.target.value)}/>
         <button type="submit">Buscar</button> {/*este boton BUSCAR activa el evento onSubmit---(2) */}
      </form>

      {canciones.map((cancion, index) => (
          <div key={index}>
            <img src={cancion.data.albumOfTrack.coverArt.sources[0].url} alt="imagen"/>
            <h2>{cancion.data.name}</h2>
            <Link href={cancion.data.uri}><button>Play</button></Link>
          </div>
        
      ))}
    </>
  );
}
export default Spotify;
