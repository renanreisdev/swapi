import styled from "styled-components";

export const PeopleArea = styled.div`

    padding-top: 4rem;

    text-align: center;

    .card {
        display: flex;
        flex-direction: column;
        justify-content: start;

        width: 460px;
        height: auto;
        margin: auto;
        padding: 0.5rem;

        background-color: #dba90d;
        border-radius: 1.5rem;
    }

    h1 {
        color: #0e0e0e;
    }

    h3 {
        padding-top: 0.5rem;
        color: #0e0e0e;
    }

    .detailsPeople {
        display: flex;
        flex-direction: column;

        > div {
            display: flex;
            text-align: left;
        }

        > div h3 {
            flex: 1;            
        }

        > div h3 span {
            font-size: 1rem;
            color: #2c2c2c;
        }

        > div h3 a span {
            transition: all 0.5s;

            &:hover {
                color: #0e0e0e;
            }
        }
    }

    .detailsColor {
        display: flex;

        div {
            flex: 1;
        }
    }

    a {
        color: #000;
        text-decoration: none;
    }

    a li {
        width: 30rem;
        height: 5rem;
        margin: 1rem;
        
        background-color: #dba90d;
        
        list-style: none;
    }
`;