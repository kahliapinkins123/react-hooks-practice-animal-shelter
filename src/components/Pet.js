import React, { useState } from "react";

function Pet({ pet }) {
  const [adopted, setAdopted] = useState(false)

  function handleClick(){
    setAdopted(true);
  }
  
  
  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {pet.gender === 'male' ? '♀':'♂'} 
          {pet.name}
        </span>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {pet.age}</p>
          <p>Weight: {pet.weight}</p>
        </div>
      </div>
      <div className="extra content">{
        adopted ? 
        <button className="ui disabled button" >Already adopted</button> :
        <button className="ui primary button" onClick={handleClick}>Adopt pet</button>
      }
        
      </div>
    </div>
  );
}

export default Pet;
