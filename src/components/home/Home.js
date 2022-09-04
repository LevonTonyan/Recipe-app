
import './Home.css';
import Recipe from './../recipe/recipe';



const Home = ({getDetails, recipes}) => {
      return (
        <div className="App">
          
          <div className='recipe-conrainer-grid'>

          {recipes.map(recipe => (
            <Recipe title={recipe.recipe.label}
                    img={recipe.recipe.image}
                    calories={recipe.recipe.calories}
                    cuisineType={recipe.recipe.cuisineType}
                    key={Math.random()}
                    getDetails={getDetails}
                    recipe={recipe}
                   />
            
          ))}

          </div>
      
        </div>
      );
}


export default Home;
