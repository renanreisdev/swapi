import styled from "styled-components";

export const SpeciesArea = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    padding-top: 4rem;

    div {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    a,
    .buttonPrevious,
    .buttonNext {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 46%;
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
    
        @media (max-width: 750px) {
            font-size: 1.4rem;
        }

        @media (max-width: 540px) {
            width: 100%;
            height: 4rem;
            margin: 0.35rem 0;
        }
    }

    .buttonPrevious,
    .buttonNext {
        background-color: #0e0e0e;
        color: #fff;

        cursor: pointer;
        
        &:hover {
            background-color: #0a0a0a;
            color: #fff;
            box-shadow: 0px 0px 7px #181818;
        }

        @media (max-width: 540px) {
            width: 47%;
        }
    }

    .buttonPrevious.inative,
    .buttonNext.inative {
        background-color: #585858;
        color: #acacac;
        cursor: default;
    }

`;