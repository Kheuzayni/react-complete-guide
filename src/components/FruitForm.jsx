import { useState } from "react";

export default function FruitForm(fruits, setFruits){
    //state
    const [newFruit, setNewFruit] = useState("");
    //Comportements
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
    //Affichages (render)
    return (
        <form action="submit" onSubmit={handleSubmit}>
            <input type="text" placeholder="ajouter un fruit..." onChange={handleChange} value={newFruit} />
            <button >+ Add fruit</button>
        </form>
    );
}