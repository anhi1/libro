"use client"
import { useEffect, useState } from 'react';
import Books from '@/components/Books';

async function fetchData() {  //    const fetchData = () =>
  try {
    const response = await fetch('/books.json');
    const data = await response.json();
    return data.books;
    
  } catch (error) {
    console.error('Error al obtener datos:', error);
    return [];
  }
};


// async function IndexPage(){
//   const books = await fetchData()



const IndexPage = () => { //async function IndexPage()
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const booksData = await fetchData();
      setBooks(booksData);
    };

    getBooks();
  }, []);

  return (
    <div>
       <Books books={books}/>
    </div>
  )
}

export default IndexPage;