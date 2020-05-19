import styled from "styled-components";

export const SearchBarContainer = styled.div`
    flex-grow: 1;
    padding: 0 20px;
    display: flex;
    align-items: center;

    svg {
        width: 15px;
        fill: ${({ theme }) => theme.colors.grey};
        margin-right: 15px;
    }

    input {
        flex-grow: 1;
        border: 1px solid #eeeeee;
        border-radius: 6px;
        height: 27px;
        padding: 2px 10px;
        outline: 0;
        transition: all 0.5s ease;

        &:focus {
            border-width: 2px;
        }
    }

    @media ${({ theme }) => theme.mediaQueries.mobileLg} {
        padding: 0 10px;

        input {
            max-width: calc(100vw - 160px);
        }

        svg {
            margin-right: 5px;
        }
    }
`;

SearchBarContainer.defaultProps = {
    theme: {
        colors: {
            grey: "#eee",
        },
        mediaQueries: {
            mobileLg: "(max-width: 500px)",
        },
    },
};
