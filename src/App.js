import React, { useState } from 'react';
import ExerciseComponent from './ExerciseComponent';


function App() {
  //state (état, données)
  const [compteur, setCompteur] = useState(1);
  //comportements

  //affichage (render)
  
  return <h1>{compteur}</h1>;
  
}

export default App;