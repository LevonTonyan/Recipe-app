
import './App.css';
import Home from './Home';
import RecipeItem from './recipeItem';
import {useState} from 'react'
import {Routes, Route} from "react-router-dom";

function App() {

let [exactRecipe, setExactRecipe] = useState({});



function getDetails(recipe){
  setExactRecipe(recipe);
}



  return (
    <Routes>
      <Route path="/" element={ <Home getDetails={getDetails}/>}/>
      <Route path="*" element={<RecipeItem exactRecipe={exactRecipe}/>}/>
    </Routes>
   
  )


}

export default App;
