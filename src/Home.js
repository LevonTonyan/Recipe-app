
import './Home.css';
import {useEffect, useState} from 'react';
import Recipe from './recipe';



const Home = ({getDetails}) => {

    let [recipes, setRecipes] = useState([]);
    let [searchBarValue, setSearchBarValue] = useState("");
    let [submitForm, setSubmitform] = useState("chicken");
    
    useEffect(() => {
      getRecipes();
    }, [submitForm]);
    
    const request = `https://api.edamam.com/api/recipes/v2?type=public&q=${submitForm}&app_id=4c696c5d&app_key=27f9b5eefbf3b5e737a6e7cf87424c1a`;
    
    const getRecipes =  async () => {
      const response = await fetch(request);
      const data = await response.json();
      setRecipes(data.hits);
 
    };
    
    function submit() {
      setSubmitform(searchBarValue);
      setSearchBarValue("");
    }
    
      return (
        <div className="App">
          <form className='search-form' onSubmit={(e) => {
            e.preventDefault()
            submit()
          }}>
            <h1>Welcome to recipe app!</h1>
            <input className="search-bar"
                   type="text" value={searchBarValue}
                   onChange={(e)=> setSearchBarValue(e.target.value)}/>
            <button className='search-button' type="submit">Search</button>
          </form>
          {recipes.map(recipe => (
            <Recipe title={recipe.recipe.label}
                    img={recipe.recipe.image}
                    calories={recipe.recipe.calories}
                    cuisineType={recipe.recipe.cuisineType}
                    key={Math.random()}
                    getDetails={getDetails}
                    recipe={recipe.recipe}
                   />
            
          ))}
        </div>
      );
}


export default Home;
