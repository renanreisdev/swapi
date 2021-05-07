import styled from 'styled-components';

export const HeaderArea = styled.div`
    .container {
        display: flex;
        justify-content: start;
        align-items: center;
        
        max-width: 1280px;
        height: 150px;
        margin: 0 auto;
        padding: 2%;

        .logo {
            display: flex:
            justify-content: center;
            align-items: center;
            
            width: 200px;
            heigth: 100px;
        }
    
        .logo img {
            width: 100%;
        }
    
        nav {
            width: 100%;
        }

        nav ul {
            display: flex;
            justify-content: start;
            align-items: center;
    
            margin-left: 2%;
    
            style-list: none;
        }
    
        nav ul li {
            padding: 0 2%;
            list-style: none;
            cursor: pointer;
    
            &:hover {
                text-decoration: underline;
            }
        }
    
        nav ul li a {
            color: #dba90d;
            font-size: 1.7rem;
            text-decoration: none;
            transition: all 0.6s;

            &:hover {
                color: #b48c13;
                text-shadow: 0px 0px 7px #4e4e4e;
            }
        }
    }
`;