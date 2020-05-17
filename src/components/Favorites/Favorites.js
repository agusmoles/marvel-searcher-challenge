import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import CharactersSection from "../CharactersSection/CharactersSection";
import md5 from "md5";

const Favorites = () => {
    const [charactersData, setCharactersData] = useState({
        data: { results: [] },
    });

    const [favoriteCharactersIds] = useState(
        JSON.parse(window.localStorage.getItem("favorites"))
    );

    useEffect(() => {
        const fetchCharacters = async () => {
            const {
                REACT_APP_API_ENDPOINT,
                REACT_APP_API_PUBLIC_KEY,
                REACT_APP_API_PRIVATE_KEY,
            } = process.env;

            const timestamp = new Date().getTime();
            const requestHash = md5(
                timestamp + REACT_APP_API_PRIVATE_KEY + REACT_APP_API_PUBLIC_KEY
            );
            const requestedParams = `ts=${timestamp}&apikey=${REACT_APP_API_PUBLIC_KEY}&hash=${requestHash}`;

            favoriteCharactersIds.forEach(async (characterId) => {
                let response = await fetch(
                    `${REACT_APP_API_ENDPOINT}/characters/${characterId}?${requestedParams}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                        },
                    }
                );
                let data = await response.json();

                setCharactersData((prevState) => ({
                    ...prevState,
                    data: {
                        ...prevState.data,
                        results: [
                            ...prevState.data.results,
                            data.data.results[0],
                        ],
                    },
                }));
            });
        };

        fetchCharacters();
    }, [favoriteCharactersIds]);

    return (
        <>
            <Navbar />
            {charactersData && (
                <CharactersSection characters={charactersData} />
            )}
        </>
    );
};

export default Favorites;
