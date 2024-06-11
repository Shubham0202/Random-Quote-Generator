import axios from 'axios';
import React, { useEffect, useState } from 'react'

function useRandomQuotes(API_URL, limit = 5) {
    const [quotes, setQuotes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchQuotes() {
            try {
                setIsLoading(true);
                setError(null);

                const response = await axios.get(API_URL,{
                    params:{
                        limit:limit,
                    }
                });
                console.log(response.data);
                setQuotes(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchQuotes();
    }, [API_URL, limit]);
    return {quotes,isLoading,error};
}

export default useRandomQuotes