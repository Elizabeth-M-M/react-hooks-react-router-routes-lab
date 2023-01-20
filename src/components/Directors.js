import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
    <h1>Directors Page</h1>
    {directors.map((director, ind)=>
      <div key={ind}>
        <h3>{director.name}</h3>
        <ul>
          {director.movies.map((movie, ind)=><li key={ind}>{movie}</li>)}
        </ul>
      </div>)}
  </div>;
}

export default Directors;
