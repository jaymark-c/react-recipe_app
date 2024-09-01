import { useEffect, useState } from 'react';
import axios from 'axios';
import { REQUESTLINK, BASE_URL, API_KEY } from './SpoonacularRequests';


/**
 * Initalize component to fetch data from the Spoonacular API.
 * @returns {JSX.Element} APIComponent
 
const InitialItems = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`${BASE_URL}${REQUESTLINK.randomRecipe}?apiKey=${API_KEY}`)
            .then(response => {
                setData(response.data);
                setLoading(false);
                console.log(response.data)
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    },[]);

    if (loading)
        return <p>Loading...</p>;
    if (error)
        return <p>Error!: {error.message}</p>;
}
*/

/**
 * Switch-case for calling http
 * @param {*} item 
 * @returns http response
 */
async function GetItem(...item){
    
    switch(item[0]){
        case 'GET_DATA':
        {
            try{
                const tempData = await axios.get(`${BASE_URL}${REQUESTLINK.randomRecipe}?apiKey=${API_KEY}`);
                console.log("GET_DATA"+tempData); 
                return tempData.data; 
            }catch(error){
                console.log(error.response.data.status);
                return error.response.data.status;
            }     
        }
        case 'SEARCH_DATA':
        {
            try{
                const itemToLower = item[1].toLowerCase();
                const tempData = await axios.get(`${BASE_URL}${REQUESTLINK.searchRecipe}&query=${itemToLower}&number=2&apiKey=${API_KEY}`)
                console.log("Search_data: \n" + tempData); 
                return tempData; 
            }catch(error){
                console.log(error.message);
                return error.message;
            }     
        }
        default:
            return `Invalid case type : ${item}`;
    }
}

export { GetItem };