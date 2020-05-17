import React from "react";
import Navbar from "../Navbar/Navbar";
import { ComicContainer } from "./ComicContainer";
import { useParams } from "react-router-dom";
import { useHttp } from "../../hooks/http";

const ComicSection = () => {
    const { comicId } = useParams();
    const [, comicData] = useHttp(`/comics/${comicId}`);

    return (
        <>
            <Navbar />
            <ComicContainer>
                {comicData &&
                    comicData.data.results.map((comic) => {
                        const {
                            title,
                            dates,
                            description,
                            creators,
                            thumbnail,
                        } = comic;
                        const image = `${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`;

                        return (
                            <React.Fragment key={comicId}>
                                <img src={image} alt={`${title} poster`} />
                                <div className="info">
                                    <h1>{title}</h1>
                                    <h6>
                                        Published:{" "}
                                        {new Date(
                                            dates.filter(
                                                (date) =>
                                                    date.type !== "onSaleDate"
                                            )[0].date
                                        ).toDateString()}
                                    </h6>
                                    {creators.items.map((creator) => {
                                        const { role, name } = creator;
                                        return (
                                            <h6 key={role}>
                                                {role}: {name}
                                            </h6>
                                        );
                                    })}
                                    <p>{description}</p>
                                </div>
                            </React.Fragment>
                        );
                    })}
            </ComicContainer>
        </>
    );
};

export default ComicSection;
