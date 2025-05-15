import { useState } from 'react'
import { Library } from './components/Library'
import { Form } from './components/Form';
import './App.css'

function App() {

  const bookList = [
    { id: 1, title: "1984", author: "George Orwell", img: "https://anylang.net/sites/default/files/covers/1984.jpg", quantity: 5 },
    { id: 2, title: "Le Petit Prince", author: "Antoine de Saint-Exupéry", img: "https://www.singulart.com/images/artworks/v2/cropped/40219/main/zoom/1941928_f0cfc4113f8b9f8d17fc25cba0ada249.jpeg", quantity: 5  },
    { id: 3, title: "L'Étranger", author: "Albert Camus", img: "https://m.media-amazon.com/images/I/8130inT26AL.jpg", quantity: 5  },
    { id: 4, title: "Harry Potter à l'école des sorciers", author: "J.K. Rowling", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUNLpoHMPjSuXM2RFhyqRlLPyL6ou0fPIYog&s", quantity: 5  },
    { id: 5, title: "Les Misérables", author: "Victor Hugo", img:"https://www.gallimard.fr/system/files/migrations/ouvrages/couvertures/G09587.jpg", quantity: 5  }
  ];

  const [books, setBooks] = useState(bookList);
  const [outOfStockBooks, setOutOfStockBooks] = useState([]);
  const [formDisplay, setFormDisplay] = useState(false);

  
  function onBookCreate(title, author, img, quantity) {
    const obj = {id: books.length +1 , title: title, author: author, img: img, quantity: quantity};
    const booksCopy = [...books];
    booksCopy.push(obj);
    setBooks(booksCopy);
    setFormDisplay(false);
  }

  function onBookQuantityChange(bookId, quantity) {
    const booksCopy = books.map((book) => 
      {
        if (book.id === bookId) {
          book.quantity += quantity;
          if(book.quantity === 0) {
            outOfStockBooks.push(book);
            console.log(outOfStockBooks);
          }
        }
        return book
      })
      setBooks(booksCopy);
  }

    return (      
      <>
      <div>
        < Library books={books} onBookQuantityChange={onBookQuantityChange} outOfStockBooks={outOfStockBooks}/>
        <button type='button' onClick={() => setFormDisplay(true)}>Ajouter un livre</button>
      </div>
      { 
        formDisplay && <Form onBookCreate={onBookCreate}/>
      }
      </>
    );
}

export default App
