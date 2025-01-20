import styled from "styled-components";

export const ContainerDetail = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 2rem;

    margin-bottom: 3rem;

    @media (max-width: 1300px) {
        /* background-color: aqua; */
        flex-direction: column;
        align-items: start;
        width: 100%;
    }

`;

export const ConatinerDetailHeaderLogo = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    gap: .8rem;

    img {
        width: 60px;
    }

    h3 {
        font-size: 1.5rem;

        display: flex;
        align-items: center;
        

        span {
            background-color: ${({theme}) => theme.BACKGROUND.primary};
            font-size: 14px;
            margin-left: 10px;

            padding: 4px 10px;
            border-radius: 4px;

            color: #0182F9;

            font-weight: 400;
        }
    }

`;

export const ConatinerDetailHeaderPrice = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    width: 40%;
    
    @media (max-width: 768px) {
        /* background-color: aqua; */
        flex-direction: column;
        align-items: start;
        width: 100%;
        gap: 1rem;
    }
    h2 {
        font-size: 2rem;
        font-weight: 700;
    }

    p {
        opacity: .8;
        font-size: 14px;
    }

`;

export const ContainerAltaBaixa = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    margin: 1rem 0 1rem;

    span {
            background-color: ${({theme}) => theme.BACKGROUND.primary};
            font-size: 14px;
            margin-left: 10px;

            padding: 4px 10px;
            border-radius: 4px;
            font-weight: 400;

            opacity: .8;
        }

    p {
        font-size: 14px;
    }
`;

export const ContainerBarra = styled.div`

    height: 12px;
    width: 100%;

    border-radius: 6px;
    /* opacity: .8; */
    background-color:rgb(224, 224, 224);


    &::after {
        content: '';
        height: 12px;
        width: 34%;
        background-color: ${({theme}) => theme.COLORS.secundary};
        position: absolute;

        border-radius: 6px;
    }

`;

export const ContainerDashboard = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    gap: 2rem;

    @media (max-width: 1330px) {
            display: flex;
            align-items: start;
            flex-wrap: wrap;
    }

`;

export const ContainerDashboardCard = styled.div`

    background-color: ${({theme}) => theme.BACKGROUND.primary};
    border-radius: 6px;

    box-shadow: 0 0 6px #00000026;

    width: 100%;

    padding: 1rem 2rem;

    @media (max-width: 768px) {
            padding: 1rem;
    }

    h4 {
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        gap: .4rem;
        font-size: .9rem;

        color: ${({theme}) => theme.COLORS.primary};

    }

    p {
        font-size: 1.2rem;
        font-weight: 500;
    }

`;