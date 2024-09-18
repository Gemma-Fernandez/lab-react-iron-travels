import React from "react";
import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

function TravelList() {
  const [listaTravel, setListaTravel] = useState(travelPlansData);

  return (
    <ul className="card-travel">
      {listaTravel.map((eachTravel, index) => (
        <li key={eachTravel.id}>
          <img 
          src={eachTravel.image} 
          alt="imagenes destinos" 
          style={{width:"250px"}}
          />
          <h2>
            {eachTravel.destination} ({eachTravel.days} days)
          </h2>
          <br/>
          <h5> {eachTravel.description}</h5>
          <h5> Price: {eachTravel.totalCost}</h5>
        </li>
      ))}
    </ul>
  );
}

export default TravelList;
