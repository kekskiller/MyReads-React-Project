import "../css/App.css";

import { useState, useEffect } from "react";
import { Route, Routes} from "react-router-dom";

import * as BooksAPI from '../utils/BooksAPI'
import { Search } from "./Search";
import { Shelf } from "./Shelf"

function App() {
  const [allBooks, setAllBooks] = useState([])

  useEffect(() => {  
    const getAllBooks = async () =>  {
      const res = await BooksAPI.getAll();
      setAllBooks(res);
      }; 
    
    getAllBooks();  
  },[] )

  console.log(allBooks)

  return (
    <div className="app">
      <Routes>
        <Route 
          path="/"
          element={<Shelf />}
        />
        <Route
          path="/search"
          element={<Search /> }
        />
      </Routes>
    </div>
  );
}

export default App;
