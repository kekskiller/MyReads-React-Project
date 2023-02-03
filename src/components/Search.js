import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as BooksAPI from '../utils/BooksAPI';
import { BooksList } from './BooksList'

export const Search = ({booksOnShelves, handleUpdate}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleChange = (e) => {
    const searchvalue = e.target.value; 
    setSearchTerm(searchvalue);  
  }

  useEffect(() => {    
    const search = async (term) => {
      const res = await BooksAPI.search(term);
      setSearchResult(res)
    }
    searchTerm ==="" ? setSearchResult([]) : search(searchTerm)  
  }, [searchTerm])

  return(
    <div className="search-books">
      <div className="search-books-bar">
        <Link to='/' className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
      </div> 
      <BooksList 
        className="books-grid"
        booksOnShelves={booksOnShelves}
        list={searchResult} 
        handleUpdate={handleUpdate}
      /> 
    </div>
  )
}