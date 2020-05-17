import React from "react";
import PropTypes from "prop-types";

const CharacterCard = ({ name, image, isFav }) => {
    return (
        <div
            className="character-card"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
        >
            {isFav ? (
                <svg
                    viewBox="0 0 511.998 511.998"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M414.168 500.62l-158.169-83.155L97.83 500.62l30.207-176.121L0 199.764l176.86-25.689 79.139-162.697 79.139 162.697 176.86 25.689-128.037 124.734z" />
                </svg>
            ) : (
                <svg
                    viewBox="0 0 511.998 511.998"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M414.168 500.62l-158.169-83.155L97.83 500.62l30.207-176.121L0 199.764l176.86-25.689 79.139-162.697 79.139 162.697 176.86 25.689-128.037 124.734zM255.999 383.572l118.325 62.208-22.598-131.76 95.777-93.308-132.396-19.23-59.108-121.519-59.109 121.518-132.396 19.23 95.777 93.308-22.598 131.76z" />
                </svg>
            )}
            <h1>{name}</h1>
        </div>
    );
};

export default CharacterCard;

CharacterCard.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    isFav: PropTypes.bool.isRequired,
};
