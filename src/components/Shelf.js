import { BooksList } from "./BooksList";

export const Shelf = ({booksOnShelves, handleUpdate}) => {
  const shelfNames= {
      currentlyReading: "Currently Reading", 
      wantToRead: "Want To Read", 
      read: "Read"
  }    

  const displayShelves = Object.keys(shelfNames).map((shelf) => { 
		return(
      <div key={shelf}>
        <h2 className="bookshelf-title">{shelfNames[shelf]}</h2>
          <BooksList                     
            className="bookshelf-books" 
            booksOnShelves={booksOnShelves}
            handleUpdate={handleUpdate}                    
            list={booksOnShelves.filter(books =>  books.shelf === shelf)}                     
          />   
      </div>
    )
	})

  return(        
    <div className="list-books-content">           
      <div>
        {displayShelves}                    
      </div>
    </div>        
  )
}