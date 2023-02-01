import { BooksList } from "./BooksList";

export const Shelf = ({allBooks}) => {
    const shelfNames= {
        currentlyReading: "Currently Reading", 
        wantToRead: "Want To Read", 
        read: "Read"
    }    

    const displayShelves = Object.keys(shelfNames).map((shelf) => 
        { return(
            <div>
                <h2 className="bookshelf-title">{shelfNames.shelf}</h2>
                <BooksList 
                    className="bookshelf-books" 
                    list={allBooks.filter(books =>  books.shelf === shelf)} 
                    key = {shelf}                        
                />   
            </div>
        )}        
    )

    return(        
        <div className="list-books-content">           
            <div className="bookshelf">
                {displayShelves}                    
            </div>
        </div>        
    )
}