import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>
    <h1>Actors Page</h1>
    {actors.map((actor, ind)=>
      <div key={ind} >
        <h3>{actor.name}</h3>
        <ul>
          {actor.movies.map((movie, ind)=><li key={ind}>{movie}</li>)}
        </ul>

      </div>
    )}
  </div>;
}

export default Actors;
