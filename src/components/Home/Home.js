import React from "react";
import Navbar from "../Navbar/Navbar";
// import ComicsSection from "../ComicsSection/ComicsSection";
import { useHttp } from "../../hooks/http";

const Home = () => {
    const [, comicsData] = useHttp("/comics", []);

    return (
        <>
            <Navbar />
            {/* <ComicsSection /> */}
        </>
    );
};

export default Home;
