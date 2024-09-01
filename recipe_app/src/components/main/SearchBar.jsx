export function SearchBar({btnItem, btnVal, searchBtn}){
    return (
        <div>
            <form onSubmit={searchBtn}>
                <input type="text" placeholder="Search for recipes..."></input>
                {' '}
                <button type="submit">Search</button>
            </form>            
            {' '}
            <button onClick={() => btnItem(!btnVal)}>Search Random</button>
        </div>
    )
}