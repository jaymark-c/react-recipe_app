import { useEffect, useState } from 'react';
import axios from 'axios';
import { REQUESTLINK, BASE_URL } from './SpoonacularRequests';

const APIComponent = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const API_KEY = 'ebd32fc71fcc45df9db188ff401fc46e$'

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

export default APIComponent;