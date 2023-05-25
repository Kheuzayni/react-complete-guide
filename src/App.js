import React, { useState } from 'react';
import ExerciseComponent from './ExerciseComponent';


function App() {
  //state (état, données)
  const [fruits, setFruits] = useState([
    { id: 1, nom : "gérté"},
    { id: 2, nom : "Thiaff"},
    { id: 3, nom : "aréne"},
  ]);

  //comportements
  //affichage (render)
  return (
    <div>
      <h1>Liste des fruits</h1>
      <ul>
        {fruits.map(
            (fruit) => (
              <li>{fruit.nom}</li>
            )
          )
        }
      </ul>
    </div>
  );
  
}

export default App;