import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1>Movies Page</h1>
    {movies.map((movie, ind)=>
      <div key= {ind}>
        <h3>{movie.title}</h3>
        <p>{movie.time}</p>
        <ul>
        {movie.genres.map((genre, ind)=><li key={ind}>{genre}</li>)}
        </ul>
      </div>
    )}

  </div>;
}

export default Movies;
