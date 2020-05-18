import React, { useState } from "react";
import CharacterCard from "./CharacterCard";
import Modal from "./Modal";
import { CardsContainer, ModalContainer } from "./styles.js";
import PropTypes from "prop-types";

const CharactersSection = ({ characters, onlyComic }) => {
    const [isModalActive, setIsModalActive] = useState(false);
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    const handleCardClick = (event) => {
        setIsModalActive(true);
        setSelectedCharacter({ ...event.target.dataset });
    };

    const handleModalClose = () => {
        setIsModalActive(false);
    };

    return (
        <>
            <CardsContainer>
                {characters.data.results.map((character) => {
                    const { id, name, thumbnail } = character;
                    // WE COULD FETCH DIFFERENT SIZES REGARDING SCREEN SIZE TO SAVE USER DATA AND ENHANCE PERFORMANCE
                    const image = `${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`;

                    return (
                        <CharacterCard
                            handleCardClick={handleCardClick}
                            key={id}
                            name={name}
                            id={id}
                            image={image}
                        />
                    );
                })}
            </CardsContainer>

            {isModalActive && (
                <ModalContainer>
                    <Modal
                        handleModalClose={handleModalClose}
                        character={selectedCharacter}
                        onlyComic={onlyComic}
                    />
                </ModalContainer>
            )}
        </>
    );
};

export default CharactersSection;

CharactersSection.propTypes = {
    characters: PropTypes.shape({
        data: PropTypes.shape({
            results: PropTypes.array.isRequired,
        }).isRequired,
    }).isRequired,
    onlyComic: PropTypes.string,
};
