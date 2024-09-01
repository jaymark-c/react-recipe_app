import { useLocation } from 'react-router-dom';
import parse from 'html-react-parser';

export function RecipeInstructions(){
    const location = useLocation();
    const data = location.state;

    return(
        <div>
            <h1>SUMMARY</h1>
            {parse(data.summary)}
            <h1>INSTRUCTIONS</h1>
            {parse(data.instructions)}          
        </div>
    )
}