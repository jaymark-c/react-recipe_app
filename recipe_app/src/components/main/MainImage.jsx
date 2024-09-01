import { Link } from 'react-router-dom';


export function MainImage({title, image, alt, instructions, summary}){
    return (
        <>
        <div>  
            <h1>{title}</h1>
            <img src={image} alt={alt}></img>
        </div>
        <Link to="/recipeInstructions" state={{instructions: instructions, summary: summary }}>
            <button>Get Recipe</button>
        </Link>
        </>   
    )
}