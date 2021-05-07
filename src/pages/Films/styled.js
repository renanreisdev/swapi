import styled from "styled-components";

export const FilmsArea = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    padding-top: 4rem;

    a,
    .buttonPrevious,
    .buttonNext {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 60%;
        height: 5rem;
        margin: 0.5rem 0;

        background-color: #dba90d;
        border-radius: 1.7rem;

        color: #000;
        font-size: 1.6rem;
        text-decoration: none;

        transition: all 0.6s;

        &:hover {
            background-color: #b48c13;

            box-shadow: 0px 0px 7px #4e4e4e;
        }
    }
`;