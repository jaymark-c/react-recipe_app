import { useReducer } from "react";
import { SearchBar } from "./SearchBar";
import { MainImage } from "./MainImage";
import { taskReducer, initialItems } from "./taskReducer";

export function Recipe(){
    const [items, dispatch] = useReducer(taskReducer, initialItems);
    
    return (
        <div>
            <SearchBar />
            <h1>Recipe</h1>
            <MainImage />
        </div>
    )
}