import React from "react";
import Navbar from "../Navbar/Navbar";
import CharactersSection from "../CharactersSection/CharactersSection";
import { useHttp } from "../../hooks/http";

const Home = () => {
    const [, charactersData] = useHttp("/characters?limit=8&offset=0");

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
