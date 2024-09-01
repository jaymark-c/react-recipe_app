import { useEffect, useReducer, useState } from 'react';
import { SearchBar } from './SearchBar';
import { MainImage } from './MainImage';
import { GetItem } from '../setup/AxiosSetup.jsx';
import { taskReducer, initialItems } from '../reducer/tasksReducer.jsx';

export function Recipe(){
    // const [items, dispatch] = useReducer(taskReducer, initialItems);
    const [item, setItem] = useState(null);
    const [noError, setNoError] = useState(true);
    const [btnClickedRandom, setBtnClickedRandom] = useState(true);
    
    useEffect(() => {
        const fetchItem = async () => {
            const tempFetchItem = await GetItem('GET_DATA');
            tempFetchItem === 'failure' ? setNoError(false) : setItem(tempFetchItem);
        }

        fetchItem();
    },[btnClickedRandom]);

    const handleSearchBtn = (e) => {
        e.preventDefault();
        const fetchItem = async() => {
            const tempFetchItem = await GetItem('SEARCH_DATA', e.target[0].value);
            tempFetchItem === 'failure' ? setNoError(false) : setItem(tempFetchItem);
        }
        fetchItem();
        console.log(item)
    }

    return (
        <>   
            {item != null && noError &&
                <div>
                    <SearchBar btnItem={setBtnClickedRandom} btnVal={btnClickedRandom} searchBtn={handleSearchBtn}/>
                    <MainImage title={item.recipes[0].title} image={item.recipes[0].image} alt={item.recipes[0].title} instructions={item.recipes[0].instructions} summary={item.recipes[0].summary}/>
                </div> 
            } 
        </>
    )
}