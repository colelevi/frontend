import React from "react";
import logo from "../logo.svg";
import "./App.css";
import Header from "../Header";
import MovieList from "../movie/movieList";

function App() {
  return (
    <div className="App">
      <Header slogan="Welcome"></Header>
      <MovieList/>
    </div>
  );
}

export default App;
