import styled from 'styled-components';

export const HeaderArea = styled.div`
    .container {

        max-width: 1280px;
        height: 120px;
        margin: 0 auto;
        padding: 15px 1%;

        nav {
            position: relative;
            
            display: flex;
            width: 100%;

            .menu-mobile {
                position: absolute;
                right: 1rem;
                top: 1rem;

                display: none;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;

                width: 30px;
                height: 30px;

                .line {
                    width: 30px;
                    height: 5px;
                    
                    background-color: #dba90d;
                }

                @media (max-width: 750px) {
                    display: flex;
                }
            }

            .logo {
                display: flex:
                justify-content: center;
                align-items: center;
                
                width: 150px;
                heigth: 75px;

                @media (max-width: 925px) {
                    width: 100px;
                    heigth: 50px;
                }

                img {
                    width: 100%;
                }
            }
    
            ul {
                display: flex;
                justify-content: start;
                align-items: center;
                flex-wrap: wrap;

                width: 100%;
                margin-left: 2%;
        
                style-list: none;

                @media (max-width: 750px) {
                    background-color: black;
                    display: block;
                }

                li {
                    padding: 0 1.5%;
                    list-style: none;
                    cursor: pointer;
            
                    &:hover {
                        text-decoration: underline;
                    }
    
                    a {
                        color: #dba90d;
                        font-size: 1.5rem;
                        text-decoration: none;
                        transition: all 0.6s;
            
                        &:hover {
                            color: #b48c13;
                            text-shadow: 0px 0px 7px #4e4e4e;
                        }
        
                        @media (max-width: 1040px) {
                            font-size: 1.4rem;
                        }
    
                        @media (max-width: 925px) {
                            font-size: 1.3rem;
                        }
    
                        @media (max-width: 820px) {
                            font-size: 1.2rem;
                        }
                    }
    
                    @media (max-width: 1040px) {
                        padding: 0 1%;
                    }
                }
            }
    
        }
    }
`;