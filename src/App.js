import "./App.css";

// import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import * as BooksAPI from './BooksAPI'
import { Search } from "./Search";
import { ShelfList } from "./ShelfList";

function App() {
v


  return (
    <div className="app">

{/* SEARCH */}
      <Search /> 
{/* SHELVES       */}
      <ShelfList />
    </div>
  );
}

export default App;
