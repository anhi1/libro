"use client"
import {useRouter} from 'next/navigation' // sirve para cambiar de pag


function Books({books}){
const router = useRouter() //esto me da un objeto router con funciones

    return (
      
      <ul className='list-group'>
        {books.map((book) => (
          <li key={book.id}
          className='list-group-item d-flex justify-content-between align-items-center list-group-item-action'
          onClick={() => { 
            router.push(`/books/${book.id}`)
          }}>
           <p>Título: {book.title}</p>
           <img src={book.photo} alt={book.photo} style={{width: "100px"}}/>
          </li>
        ))}
      </ul>
    );
  }
  
  export default Books;
  
  