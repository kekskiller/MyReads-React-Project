import { Book } from "./Book"

export const BooksList = ({list}) => {
 
  return(
  <div className="books-grid">
    {list && list.map(book => <Book key={book.id} book={book} />)}
    </div>
  )
}
