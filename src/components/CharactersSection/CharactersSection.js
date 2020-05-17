import React from "react";
import styled from "styled-components";
import CharacterCard from "./CharacterCard";
import PropTypes from "prop-types";

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 40px 0;

    .character-card {
        box-shadow: 0 1px 5px 0 #aaa;
        flex-basis: 23%;
        border-radius: 3px;
        margin: 0 1% 20px;
        min-height: 300px;
        display: flex;
        flex-flow: column;
        padding: 10px;
        cursor: pointer;

        svg {
            width: 20px;
            fill: #fff;
            margin-left: auto;
        }

        h1 {
            margin-top: auto;
            text-transform: uppercase;
            color: #fff;
            font-size: 20px;
            text-shadow: 0 1px 3px #000;
        }
    }
`;

const CharactersSection = ({ characters }) => {
    return (
        <CardsContainer>
            {characters.data.results.map((character) => {
                const { id, name, thumbnail } = character;
                // WE COULD FETCH DIFFERENT SIZES REGARDING SCREEN SIZE TO SAVE USER DATA AND ENHANCE PERFORMANCE
                const image = `${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`;

                return (
                    <CharacterCard
                        key={id}
                        name={name}
                        id={id}
                        image={image}
                        isFav={false}
                    />
                );
            })}
        </CardsContainer>
    );
};

export default CharactersSection;

CharactersSection.propTypes = {
    characters: PropTypes.shape({
        data: PropTypes.shape({
            results: PropTypes.array.isRequired,
        }).isRequired,
    }).isRequired,
};
