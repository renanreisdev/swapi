import styled from 'styled-components';

export const Template = styled.div`
    .stars {
        position: absolute;
        display: block;
        width: 3px;
        height: 3px;
        
        border-radius: 50%;
        box-shadow: 1rem 1rem white,
        68rem 24rem white,
        80rem 29rem white,
        95rem 40rem white,
        78rem 45rem white,
        106rem 34rem white,
        100rem 7rem white,
        73rem 9rem white,
        89rem 27rem white,
        94rem 15rem white,
        84rem 3rem white,
        11rem 46rem white,
        29rem 13rem white,
        27rem 35rem white,
        15rem 27rem white,
        38rem 37rem white,
        61rem 28rem white,
        21rem 8rem white,
        58rem 15rem white,
        74rem 36rem white,
        45rem 10rem white,
        17rem 24rem white,
        20rem 45rem white,
        5rem 60rem white,
        15rem 57rem white,
        25rem 53rem white,
        31rem 65rem white,
        47rem 69rem white,
        55rem 75rem white,
        68rem 61rem white,
        110rem 40rem white;

        animation: anim-stars 10s linear infinite;

        z-index: 0;
    }

@keyframes anim-stars {
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(-150px);
    }
}
`;

export const PageContainer = styled.div`
    max-width: 1280px;
    height: calc(100vh - 250px);
    margin: auto;
    padding: 0 2%;
`;

export const PageTitle = styled.h1`

`;

export const PageBody = styled.div`

`;