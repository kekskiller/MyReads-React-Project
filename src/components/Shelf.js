import { BooksList } from "./BooksList";

export const Shelf = ({allBooks, handleUpdate}) => {
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
              handleUpdate={handleUpdate}                    
              list={allBooks.filter(books =>  books.shelf === shelf)}                     
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