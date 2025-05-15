import { Book } from "./Book"

export function Library({books, onBookQuantityChange, outOfStockBooks}) {
  
    return (

  
            <div>
                <ul className="library">
                    {books.map((book) => 
                        <Book book={book} key={book.id} onBookQuantityChange={onBookQuantityChange}/>
                    )}
                </ul>
            </div>
    )

    

}