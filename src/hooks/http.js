import { useState, useEffect } from "react";
import md5 from "md5";

const {
    REACT_APP_API_ENDPOINT,
    REACT_APP_API_PUBLIC_KEY,
    REACT_APP_API_PRIVATE_KEY,
} = process.env;

const timestamp = new Date().getTime();
const requestHash = md5(
    timestamp + REACT_APP_API_PRIVATE_KEY + REACT_APP_API_PUBLIC_KEY
);

export const useHttp = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [fetchedData, setFetchedData] = useState(null);

    useEffect(() => {
        const endpoint = `${REACT_APP_API_ENDPOINT}${url}?ts=${timestamp}&apikey=${REACT_APP_API_PUBLIC_KEY}&hash=${requestHash}`;
        process.env.NODE_ENV === "development" &&
            console.log("Fetching data...", endpoint);
        fetch(endpoint, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch");
                }
                return response.json();
            })
            .then((data) => {
                setIsLoading(false);
                setFetchedData(data);
            })
            .catch((err) => {
                console.error(err);
                setIsLoading(false);
            });
    }, [url]);

    return [isLoading, fetchedData, setFetchedData];
};
