import { Book } from "./Book"

export const BooksList = ({booksOnShelves, list, handleUpdate}) => {
  
  const findShelf = (bookID) => {    
    const foundBook = booksOnShelves.find(book => book.id === bookID);
    return (foundBook !== undefined) ? foundBook.shelf : 'none'
  }
  
  return(
    <div className="books-grid">
      {list && list.map(book => <Book key={book.id} book={book} shelf={findShelf(book.id)} handleUpdate={handleUpdate} />)}
    </div>
  )
}