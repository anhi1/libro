"use client";
import Books from "@/components/Books";
import { useState, useEffect } from "react";


export default function BookList() {

  const [books, setBooks] = useState([]);
  console.log(books)
  useEffect(() => {
    fetch('https://json-book.vercel.app/books')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        setBooks(responseJson);
      });
  }, []);

  return (

    <Books books={books} />

  );
}
