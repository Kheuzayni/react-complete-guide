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
    //Process
    //1. copie du state
    const fruitsCopy = [...fruits];
    //2. manipuler ma copie
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);
    //3. Update mon state avec le setter
    setFruits(fruitsCopyUpdated) ;
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