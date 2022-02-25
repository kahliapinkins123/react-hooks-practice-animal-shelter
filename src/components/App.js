import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState("all");

  useEffect(()=>{
    fetch('http://localhost:3001/pets')
      .then((r)=>r.json())
      .then((petObj)=>setPets(petObj))
  }, [])

  function onFindPets(){
    const filteredPets = pets.filter((pet)=>{
      if (filters === 'all'){
        return true;
      }else{
        return pet.type === filters;
      }    
    })
    return filteredPets;
  }

  const filteredPets = onFindPets();

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters setFilters={setFilters} onFindPets={onFindPets}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={filteredPets}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
