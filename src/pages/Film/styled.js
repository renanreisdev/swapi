import styled from "styled-components";

export const FilmsArea = styled.div`
    text-align: center;

    > p {
        text-align: left;
    }

    h1 {
        padding-top: 5rem;
    }

    h3 {
        padding-top: 2rem;
        color: #dba90d;
    }

    .details-film {
        display: flex;
        justify-content: center;
        align-items: center;

        div {
            flex: 1;
        }
    }

    .people {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;

        a {
            display: flex;
            justify-content: center;
            align-items: center;
    
            width: 16%;
            height: 2rem;
            margin: 0.5rem 0;
    
            background-color: #dba90d;
            border-radius: 0.7rem;
    
            color: #000;
            font-size: 1rem;
            text-decoration: none;
    
            transition: all 0.6s;
    
            &:hover {
                background-color: #b48c13;
    
                box-shadow: 0px 0px 7px #4e4e4e;
            }
        }
    }

`;