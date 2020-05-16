import { useState, useEffect } from 'react';

export const useHttp = (url, dependencies, callback) => {
    const [isLoading, setIsLoading] = useState(true);
    const [fetchedData, setFetchedData] = useState(null);

    useEffect(() => {
        process.env.NODE_ENV === 'development' && console.log("Fetching data...", process.env.REACT_APP_API_ENDPOINT + url);
        fetch(process.env.REACT_APP_API_ENDPOINT + url).then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch");
            }
            return response.json();
        }).then(data => {
            setIsLoading(false);
            setFetchedData(data);
            if (callback) callback(data);
        }).catch(err => {
            console.error(err);
            setIsLoading(false);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies)

    return [isLoading, fetchedData, setFetchedData];
};