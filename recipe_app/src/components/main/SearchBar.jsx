import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function SearchBar({btnItem, btnVal, searchBtn}){
    return (
        <div>
            <form onSubmit={searchBtn}>
                <TextField 
                    id="standard-basic"
                    variant="standard" 
                    type="text" 
                    placeholder="Search for recipes..."
                />
                {' '}
                <Button 
                    variant="outlined" 
                    type="submit"
                    >
                        Search
                </Button>
            </form>            
            {' '}
            <Button 
                variant="outlined" 
                onClick={() => btnItem(!btnVal)}
            >
                Search Random
            </Button>
        </div>
    )
}