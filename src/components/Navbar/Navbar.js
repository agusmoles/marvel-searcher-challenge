import React from "react";
import styled from "styled-components";
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
        height: 17px;
        fill: #eeeeee;
        padding-left: 20px;
        border-left: 1px solid #eeeeee;
    }
`;

const Navbar = () => {
    return (
        <>
            <NavbarContainer>
                <img src={marvelLogo} />
                <SearchBar />
                <svg
                    className="fav-icon"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12.821 16.0005c-.0688477 0-.138184-.014183-.203125-.0430384l-4.61816-2.05606-4.61816 2.05606c-.170898.0758066-.370117.0493956-.515625-.0670033-.145996-.116888-.214355-.30567-.177734-.489072l1.01855-5.10249-3.56055-3.5668c-.130371-.130582-.178223-.322299-.125-.499343.0532227-.176555.199707-.309583.380371-.345774l5.10352-1.02265 2.0376-4.59239c.161133-.361913.75293-.361913.914063 0l2.0376 4.59239 5.10352 1.02265c.180664.0361915.327148.169219.380371.345774.0532227.177044.0053711.368761-.125.499343l-3.56055 3.5668 1.01855 5.10249c.0366211.183402-.0317383.372184-.177734.489072-.0903321.072383-.201172.110042-.3125.110042zm-4.82129-3.14816c.0693359 0 .138672.014183.203125.0430384l3.93848 1.75381-.881836-4.41681c-.0327148-.164328.0185547-.334036.136719-.452392l3.08936-3.09436-4.44092-.890111c-.15918-.0317899-.292969-.138897-.358887-.287575l-1.68604-3.7996-1.68604 3.7996c-.065918.148678-.199707.255785-.358887.287575l-4.44092.890111 3.08936 3.09436c.118164.118356.169434.288064.136719.452392l-.881836 4.41681 3.93848-1.75381c.064453-.0288553.133789-.0430384.203125-.0430384z" />
                </svg>
            </NavbarContainer>
        </>
    );
};

export default Navbar;
