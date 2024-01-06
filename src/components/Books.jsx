"use client"
import {useRouter} from 'next/navigation' // sirve para cambiar de pag


function Books({books}){
const router = useRouter() //esto me da un objeto router con funciones

    return (
      
      <ul>
        {books.map((book) => (
          <li key={book.id}
          onClick={() => { 
            router.push(`/books/${book.id}`)
          }}>
           <p>{book.title}</p>
           <img src={book.photo} alt={book.photo}/>
          </li>
        ))}
      </ul>
    );
  }
  
  export default Books;
  
  