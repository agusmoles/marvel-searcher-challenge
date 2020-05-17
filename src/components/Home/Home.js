import React from "react";
import Navbar from "../Navbar/Navbar";
import CharactersSection from "../CharactersSection/CharactersSection";
import { useHttp } from "../../hooks/http";

const randomOffset = Math.floor(Math.random() * 1485);

const Home = () => {
    const [, charactersData] = useHttp(
        `/characters?limit=8&offset=${randomOffset}`
    );

    return (
        <>
            <Navbar />
            {charactersData && (
                <CharactersSection characters={charactersData} />
            )}
        </>
    );
};

export default Home;
