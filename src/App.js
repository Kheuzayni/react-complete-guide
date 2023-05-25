import React, { useState } from 'react';

function App() {
  //state (état, données)
  const [fruits, setFruits] = useState([
    { id: 1, nom : "gérté"},
    { id: 2, nom : "Thiaff"},
    { id: 3, nom : "aréne"},
  ]);
  const [newFruit, setNewFruit] = useState("");

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
  const handleSubmit = (event) => {
    event.preventDefault();
    //Process
    //1. copie du state
    const fruitsCopy = [...fruits];
    //2. manipuler ma copie
    const id = new Date().getTime();
    const nom = newFruit;
    fruitsCopy.push( {id, nom} );
    //3. Update mon state avec le setter
    setFruits(fruitsCopy) ;
    //4. On vide le input 
    setNewFruit("");

  }
  const handleChange = (event) => {
    setNewFruit(event.targert.value);
  }
  //affichage (render) 
  return (
    <div>
      <h1>Liste des fruits</h1>
      <ul>
        {fruits.map(
            (fruit) => (
              <li key={fruit.id}>
                {fruit.nom} {""}
                <button onClick={() => deleteFruit(fruit.id)} >Delete</button>
              </li>
            )
          )
        }
      </ul>
      <form action="submit" onSubmit={handleSubmit}>
        <input type="text" placeholder="ajouter un fruit..." onChange={handleChange} value={newFruit} />
        <button >+ Add fruit</button>
      </form>
    </div>
  );
  
}

export default App;

//Gestion formualire
//1.creation form
//2.soumission form(onSubmit/ handleSubmit)
//3.collecte donnee form (methode ascendante / descendante (onchange / handleChange)