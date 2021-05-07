import styled from 'styled-components';

export const FooterArea = styled.div`
    .container {
        max-width: 1280px;
        height: 100px;
        margin: auto;
        text-align: center;
        line-height: 100px;

        span {}
            color: #dba90d;
        }

        span a {
            color: #dba90d;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }
`;