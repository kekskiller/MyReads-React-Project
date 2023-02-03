import "../css/App.css";

import { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";

import * as BooksAPI from '../utils/BooksAPI'
import { Search } from "./Search";
import { Shelf } from "./Shelf"

function App() {
  const [booksOnShelves, setBooksOnShelves] = useState([])

  const getAllBooks = async () =>  {
    const res = await BooksAPI.getAll();
    setBooksOnShelves(res);
  }; 

  useEffect(() => {  
      getAllBooks();  
  },[] )

  const handleUpdate = async (book, shelf) => {
    await BooksAPI.update(book,shelf);
    getAllBooks();  
  }

  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <Routes>
          <Route 
            path="/"
            element={<Shelf booksOnShelves={booksOnShelves} handleUpdate={handleUpdate} />}
          />
          <Route
            path="/search"
            element={<Search booksOnShelves={booksOnShelves} handleUpdate={handleUpdate} /> }
          />
        </Routes>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link> 
      </div>
    </div>
  );
}

export default App;
