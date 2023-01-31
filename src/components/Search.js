import { useState, useEffect } from "react";
import * as BooksAPI from '../utils/BooksAPI';

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState();

  const handleChange = (e) => {
    const searchvalue = e.target.value;

    setSearchTerm(searchvalue);

    const search = async (term) =>  {
      const res = await BooksAPI.search(term);      
      setSearchResult(res);
    };

    search(searchvalue); 
    console.log(searchResult)
  }

    return(
        <div className="search-books">
          <div className="search-books-bar">
            <a href="./"
              className="close-search"             
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={searchTerm}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
    )
}