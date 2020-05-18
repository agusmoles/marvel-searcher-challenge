import styled from "styled-components";

export const ComicContainer = styled.div`
    display: flex;
    padding: 40px 10%;

    img {
        flex-basis: 50%;
        object-fit: contain;
    }

    .info {
        padding-left: 20px;
        h1 {
            font-size: 30px;
            margin-bottom: 40px;
        }

        h6 {
            font-size: 15px;
            margin-bottom: 2px;
            font-weight: bold;
            text-transform: capitalize;
        }

        p {
            margin-top: 50px;
        }
    }

    @media ${({ theme }) => theme.mediaQueries.mobileLg} {
        flex-direction: column;

        img {
            flex-basis: 100%;
        }

        .info {
            padding: 20px 0;
        }
    }
`;
