import "../css/App.css";

// import { useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import * as BooksAPI from '../utils/BooksAPI'
import { Search } from "./Search";
import { ShelfList } from "./BooksList";

function App() {
  const searchterm = 'game'
  const navigate = useNavigate

  const searchBook = (term) => {
    const search = async () =>  {
      const res = await BooksAPI.search(term);
      return res;
    }; 

    search();    
    navigate('/')
  }

  console.log(searchBook(searchterm));


  return (
    <div className="app">


  <Routes>
      <Route 
        path="/"
        element={<ShelfList />}
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
