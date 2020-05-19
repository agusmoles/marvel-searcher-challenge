import React from "react";
import Proptypes from "prop-types";
import { useHttp } from "../../hooks/http";
import { Link } from "react-router-dom";

const Modal = ({ character, handleModalClose, onlyComic }) => {
    const { id, name } = character;
    const queryParam = onlyComic && `?title=${onlyComic}`;
    const [, comicsData] = useHttp(
        `/characters/${id}/comics${queryParam || ""}`
    );

    return (
        <div className="modal">
            <div className="close" onClick={handleModalClose}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512.001 512.001"
                >
                    <path d="M284.286 256.002L506.143 34.144c7.811-7.811 7.811-20.475 0-28.285-7.811-7.81-20.475-7.811-28.285 0L256 227.717 34.143 5.859c-7.811-7.811-20.475-7.811-28.285 0-7.81 7.811-7.811 20.475 0 28.285l221.857 221.857L5.858 477.859c-7.811 7.811-7.811 20.475 0 28.285 3.905 3.905 9.024 5.857 14.143 5.857 5.119 0 10.237-1.952 14.143-5.857L256 284.287l221.857 221.857c3.905 3.905 9.024 5.857 14.143 5.857s10.237-1.952 14.143-5.857c7.811-7.811 7.811-20.475 0-28.285L284.286 256.002z" />
                </svg>
            </div>
            <h1>{name}</h1>

            <section className="comics-container">
                {comicsData &&
                    comicsData.data.results.map((comic) => {
                        const { id, description, title, thumbnail } = comic;
                        const image = `${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`;

                        return (
                            <article className="comic" key={id}>
                                <Link target="_blank" to={`/comics/${id}`}>
                                    <img src={image} alt={`${title} poster`} />
                                </Link>

                                <div className="info">
                                    <h4>{title}</h4>
                                    <p>{description}</p>
                                </div>
                            </article>
                        );
                    })}
            </section>
        </div>
    );
};

export default Modal;

Modal.propTypes = {
    character: Proptypes.object.isRequired,
    handleModalClose: Proptypes.func.isRequired,
    onlyComic: Proptypes.string,
};