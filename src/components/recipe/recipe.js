import './recipe.css'
import {Link} from 'react-router-dom'

const Recipe = ({title, cuisineType, img, calories,recipe, getDetails}) => {

function onClick() {
    getDetails(recipe);

}

  return (
    <div className='recipe-item-container'>
    <Link to={title} onClick={onClick} className="link">
    <div>{title}</div>
        <p>{Math.trunc(calories)} cal.</p>
        <p>{cuisineType}</p>
      <img src={img} alt="" />
    </Link>
        
     
    </div>
  );
};

export default Recipe;
