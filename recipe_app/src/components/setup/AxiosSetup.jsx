import axios from 'axios';
import { REQUESTLINK, BASE_URL, API_KEY } from './SpoonacularRequests';

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
                const tempData = await axios.get(`${BASE_URL}${REQUESTLINK.searchRecipe}&query=${itemToLower}&apiKey=${API_KEY}`)
                console.log(tempData);
                let dataInstructions = tempData.data.results[0].analyzedInstructions[0].steps; //array of steps
                let stepsInstructions = dataInstructions.map(element => 
                    `${element.step}<br>`).join(); //create a string of instructions
                
                tempData.data.results[0] = {...tempData.data.results[0], instructions: stepsInstructions}
                let objConfig = {
                                    data: 
                                        {
                                            recipes:[tempData.data.results[0]]
                                        }
                                };

                return objConfig.data; 
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