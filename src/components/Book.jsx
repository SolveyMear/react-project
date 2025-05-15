export function Book({book, onBookQuantityChange}) {

   function setQuantity(quantity) {
    onBookQuantityChange(book.id, quantity);
   }

    if (book.quantity > 0) {
        return (
            <li >
                <div >
                    <span className="title">{book.title},</span>
                    <span className="author">{book.author}</span>
                    <img className="image" src={book.img} alt="image de couverture" />
                    <span>{book.quantity} exemplaires disponibles</span>
                    <button onClick={()=>setQuantity(1)}>+</button>
                    <button onClick={()=>setQuantity(-1)}>-</button>
                </div>
            </li>
        );
    }
}