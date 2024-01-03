"use client"
function Books({books}){
    return (
      
      <ul>
        {books.map((book) => (
          <li key={book.id}>
           <p>{book.title}</p>
           <img src={book.photo} alt={book.photo}/>
            
          </li>
        ))}
      </ul>
    );
  }
  
  export default Books;
  
  