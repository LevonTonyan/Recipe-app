import "./recipeItem.css";
import {Link} from "react-router-dom"

 const RecipeItem = ({exactRecipe}) => {

    return (
        <div className="recipe-container">
              <div className="header"><h1>{exactRecipe.label}</h1></div>
    
        <div className='recipe-item'>
                <div className="left-block">
                    <div className="recipe-img"><img src={exactRecipe.image}></img></div>
                    <div className="recipe-ing-list"><ul className="ing-list">
                    {exactRecipe.ingredientLines.map(ing => (
                    <li key={Math.random()}>{ing}</li>
                    ))}
                    </ul></div>
                
                    <div className="health-block">
                    <ul>{exactRecipe.healthLabels.map(note => (
                        <li>{note}</li>
                    ))}</ul>
                    </div>
                </div>

              
            
        <div className="link-to-main">
        <Link to="/">Back to Main menu</Link>    
        </div>
        </div>
        </div>
      );
    };
 

export default RecipeItem;



