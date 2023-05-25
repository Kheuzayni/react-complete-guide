import React, { useState } from 'react';
import ExerciseComponent from './ExerciseComponent';


function App() {
  //state (état, données)
  const [compteur, setCompteur] = useState(1);
  //comportements
  const handleClick1 = () => {
    alert("hangleclick done : 1ere methode branchement composant et affichage");
  };
  const handleClick = () => {
    //compteur = compteur+1
    setCompteur(compteur+1);
  };

  //affichage (render)
  return (
  <div>
    <ExerciseComponent/>
    <h1>{compteur}</h1>
    <button onClick={handleClick1}>methode1</button> 
    <button onClick={() => alert("hangleclick done : 2eme methode branchement composant et affichage")}>
      methode2
    </button><br/>
    <button onClick={handleClick}>Incrémente</button>
  </div>
  );
  
}

export default App;