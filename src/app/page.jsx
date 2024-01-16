"use client";
import Books from "@/components/Books";
import { useState, useContext, useEffect } from "react";
// import { ThemeContext } from "./context/ThemeContext";

// async function getBooks() {
//   const res = await fetch("http://localhost:3000/books");
//   const data = await res.json();
//   return data
// }

export default function BookList() {
  // const books = getBooks();
  const [ books, setBooks ] = useState([]);
  console.log (books)
  useEffect(() => {
    fetch('https://json-book.vercel.app/books')
      .then((response) => response.json())
      .then((responseJson) => 
      {console.log (responseJson)
        setBooks(responseJson);
      });
  }, []);

  return (
    <>
      <Books books={books} />
    </>
  );
}
