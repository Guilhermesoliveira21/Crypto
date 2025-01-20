import styled from "styled-components";

export const ContainerCard = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    /* flex-wrap: wrap; */

    gap: 4rem;

    margin: 4rem 0;
    padding: 0 4rem;

    @media (max-width: 1840px) {
       
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        gap: 2rem;
    }

    @media (max-width: 1119px) {
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-start;
        overflow-x: auto; /* Permite rolagem horizontal */
        padding: 0 2rem; /* Ajusta o espaçamento interno */
        scroll-snap-type: x mandatory; /* Habilita o snapping para deslizar */
    }

`;

export const CardBody = styled.div`

    background-color: ${({theme}) => theme.BACKGROUND.secundary};
    padding: 2rem 3rem;

    border-radius: 6px;

    width: 100%;

    @media (max-width: 1840px) {
            width: 40%;
        }

    @media (max-width: 1119px) {
        width: 100%;
        
    }

`;

export const CardHeader = styled.div`

    display: flex;
    align-items: center;

    gap: 1rem;

    span {
        background-color: ${({theme}) => theme.BACKGROUND.tercery};
        font-size: 12px;
        padding: 4px 8px;
        border-radius: 4px;

        color: #2994F6;
        font-weight: 500;
    }
`;

export const CardPriceBody = styled.div`

    display: flex;
    align-items: center;

    gap: .7rem;
    margin: 1rem 0;

    p {
        font-size: 1.2rem;
        font-weight: 600;
    }

    div > span {
        color: green;
        font-size: 13px;
    }

    

`;