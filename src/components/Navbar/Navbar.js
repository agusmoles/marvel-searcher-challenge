import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import marvelLogo from "../../assets/images/logo.jpg";
import SearchBar from "./SearchBar";

const NavbarContainer = styled.nav`
    width: 100%;
    min-height: 50px;
    background: ${({ theme }) => theme.colors.navbarBackground};
    display: flex;
    align-items: center;
    padding: 0 5%;
    box-shadow: 0 2px 5px 0 #eeeeee;

    img {
        height: 24px;
        padding-right: 20px;
        border-right: 1px solid #eeeeee;
    }

    .fav-icon {
        height: 18px;
        fill: #eeeeee;
        padding-left: 20px;
        border-left: 1px solid #eeeeee;
    }

    @media ${({ theme }) => theme.mediaQueries.mobileLg} {
        img {
            height: 20px;
            padding-right: 10px;
        }

        .fav-icon {
            padding-left: 10px;
        }
    }
`;

const Navbar = () => {
    return (
        <>
            <NavbarContainer>
                <Link to="/">
                    <img src={marvelLogo} alt="Marvel Searcher logo" />
                </Link>
                <SearchBar />
                <Link to="/favorites">
                    <svg
                        viewBox="0 0 511.998 511.998"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fav-icon"
                    >
                        <path d="M414.168 500.62l-158.169-83.155L97.83 500.62l30.207-176.121L0 199.764l176.86-25.689 79.139-162.697 79.139 162.697 176.86 25.689-128.037 124.734z" />
                    </svg>
                </Link>
            </NavbarContainer>
        </>
    );
};

export default Navbar;
