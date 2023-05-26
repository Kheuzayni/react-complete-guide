import React, { useState } from 'react';
import Fruit from './components/Fruit'
import FruitForm from './components/FruitForm'

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
      <Fruit/>
        {fruits.map(
            (fruit) => (
              <Fruit fruitInfo={fruit} onFruitDelete = {deleteFruit} />
            )
          )
        }
      </ul>
      <FruitForm fruits = {fruits} setFruits={setFruits}/>
    </div>
  );
  
}

export default App;

//Gestion formualire
//1.creation form
//2.soumission form(onSubmit/ handleSubmit)
//3.collecte donnee form (methode ascendante / descendante (onchange / handleChange)