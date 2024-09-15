import { Link } from 'react-router-dom';

export function NotFound({goBack}){
    return(
        <div>
            PAGE NOT FOUND
            <Link to="/">
                <button onClick={goBack}>
                    CLICK TO RETURN
                </button>   
            </Link>            
        </div>
    );
}