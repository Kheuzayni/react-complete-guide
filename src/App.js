import React, { useState } from 'react';
import ExerciseComponent from './ExerciseComponent';


function App() {
  //state (état, données)
  const [compteur, setCompteur] = useState(1);
  //comportements
  const handleClick = () => {
    alert("hangleclick done : 1ere methode branchement composant et affichage");
  };

  //affichage (render)
  
  return (
  <div>
    <h1>{compteur}</h1>
    <button onClick={handleClick}>methode1</button> 
    <button onClick={() => alert("hangleclick done : 2eme methode branchement composant et affichage")}>methode2</button>
  </div>
  );
  
}

export default App;