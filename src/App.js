import React, { useState } from 'react';

function App() {
  //state (état, données)
  const [fruits, setFruits] = useState([
    { id: 1, nom : "gérté"},
    { id: 2, nom : "Thiaff"},
    { id: 3, nom : "aréne"},
  ]);

  //comportements
  const deleteFruit = (id) => {
    //alert("Test branchement delete")
    console.log(id);
  }
  //affichage (render)
  return (
    <div>
      <h1>Liste des fruits</h1>
      <ul>
        {fruits.map(
            (fruit) => (
              <li key={fruit.id}>
                {fruit.nom} <button onClick={() => deleteFruit(fruit.id)} >Delete</button>
              </li>
            )
          )
        }
      </ul>
    </div>
  );
  
}

export default App;