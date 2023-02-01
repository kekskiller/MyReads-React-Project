import { Book } from "./Book"

export const BooksList = ({list}) => {
 
  return(
  <div className="books-grid">
    {list && list.map(book => <Book id={book.id} book={book} />)}
    </div>
  )
}
