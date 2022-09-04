import "./recipeItem.css";
import {Link} from "react-router-dom"

 const RecipeItem = ({exactRecipe}) => {

    return (
        <div className="recipe-container">
              <div className="header"><h1>{exactRecipe.recipe.label}</h1></div>
    
        <div className='recipe-item'>
                <div className="left-block">
                    <div className="recipe-img"><img src={exactRecipe.recipe.image}></img></div>
                    <div className="recipe-ing-list"><ul className="ing-list">
                    {exactRecipe.recipe.ingredientLines.map(ing => (
                    <li key={Math.random()}>{ing}</li>
                    ))}
                    </ul></div>
                
                    <div className="health-block">
                    <ul>{exactRecipe.recipe.healthLabels.map(note => (
                        <li>{note}</li>
                    ))}</ul>
                    </div>
                </div>

              
            
        <div className="link-to-main">
        <Link to="/">Back to list</Link>    
        </div>
        </div>
        </div>
      );
    };
 

export default RecipeItem;



