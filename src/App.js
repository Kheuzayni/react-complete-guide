import React, { useState } from 'react';
import ExerciseComponent from './ExerciseComponent';


function App() {
  //state (état, données)
  const [compteur, setCompteur] = useState(1);
  //comportements
  const handleClick = () => {
    alert("hangleclick done");
  };

  //affichage (render)
  
  return (
  <div>
    <h1>{compteur}</h1>
    <button onClick={handleClick}>Alert</button>
  </div>
  );
  
}

export default App;