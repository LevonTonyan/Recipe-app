
import './App.css';
import Home from './components/home/Home';
import RecipeItem from './components/recipeItem/recipeItem';
import {useState,useEffect} from 'react'
import {Routes, Route} from "react-router-dom";
import Header from './components/header/header';

function App() {

let [exactRecipe, setExactRecipe] = useState({});
let [recipes, setRecipes] = useState([]);
let [searchBarValue, setSearchBarValue] = useState("");
let [submitForm, setSubmitform] = useState("chicken");

const getRecipes =  async () => {
  const response = await fetch(request);
  const data = await response.json();
  setRecipes(data.hits);

};

function submit() {
    setSubmitform(searchBarValue);
    setSearchBarValue("");
  }


useEffect(() => {
  getRecipes();
}, [submitForm]);

const request = `https://api.edamam.com/api/recipes/v2?type=public&q=${submitForm}&app_id=4c696c5d&app_key=27f9b5eefbf3b5e737a6e7cf87424c1a`;


function getDetails(recipe){
  setExactRecipe(recipe);

}



  return (
    <>
    <Header submit={submit}
            searchBarValue={searchBarValue}
            setSearchBarValue={setSearchBarValue}/>
    <Routes>
    <Route path="/" element={ <Home getDetails={getDetails} recipes={recipes}/>}/>
    <Route path="*" element={<RecipeItem exactRecipe={exactRecipe}/>}/>
   </Routes>
  
    </>
    
  )


}

export default App;
