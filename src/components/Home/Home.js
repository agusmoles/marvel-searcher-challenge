import React from "react";
import Navbar from "../Navbar/Navbar";
import CharactersSection from "../CharactersSection/CharactersSection";
import { useHttp } from "../../hooks/http";
import PropTypes from "prop-types";
import { parseQueryParams } from "../../utilities/queryParams";

const randomOffset = Math.floor(Math.random() * 1485);

const Home = ({ location }) => {
    let { queryParams, queryParamsString } = parseQueryParams(location.search);
    const comicTitle = queryParams.comic;

    if (location.search === "") queryParamsString += `&offset=${randomOffset}`;

    const endpoint = `/characters?limit=8${queryParamsString}`;

    const [, charactersData] = useHttp(endpoint);

    return (
        <>
            <Navbar />
            {charactersData && (
                <CharactersSection
                    onlyComic={comicTitle}
                    characters={charactersData}
                />
            )}
        </>
    );
};

export default Home;

Home.propTypes = {
    location: PropTypes.object,
};
