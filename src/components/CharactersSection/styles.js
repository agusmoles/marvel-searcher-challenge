import styled from "styled-components";

export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 40px 0;
    @media ${({ theme }) => theme.mediaQueries.mobileLg} {
        flex-wrap: nowrap;
        overflow: scroll;
        width: 100%;
    }

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
        @media ${({ theme }) => theme.mediaQueries.mobileLg} {
            flex-basis: 90%;
            flex-shrink: 0;
            margin-left: 3%;
            min-height: 400px;
        }

        svg {
            width: 30px;
            fill: #fff;
            margin-left: auto;
            padding-bottom: 10px;
            padding-left: 10px;
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

export const ModalContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.65);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;

    .modal {
        background: ${({ theme }) => theme.colors.background};
        width: 95%;
        max-width: 500px;
        height: 100%;
        max-height: 600px;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        padding: 20px 15px;

        .close {
            cursor: pointer;
            width: 14px;
            fill: ${({ theme }) => theme.colors.textColour};
            margin-left: auto;
        }

        h1 {
            font-size: 30px;
        }

        .comics-container {
            display: flex;
            flex-flow: column;
            overflow-y: scroll;

            .comic {
                display: flex;
                padding: 20px 0;
                @media ${({ theme }) => theme.mediaQueries.mobileLg} {
                    flex-direction: column;
                }

                img {
                    flex-shrink: 0;
                    width: 100px;
                    height: 140px;
                    object-fit: cover;
                    margin-right: 15px;
                    border-radius: 6px;
                    @media ${({ theme }) => theme.mediaQueries.mobileLg} {
                        width: 100%;
                        margin-bottom: 5px;
                    }
                }

                p {
                    margin-top: 5px;
                    font-size: 14px;
                }
            }
        }
    }
`;
