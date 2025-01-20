import styled from "styled-components";

export const ContainerSectionCard = styled.div`

    background-color: ${({theme}) => theme.BACKGROUND.secundary};
    border-radius: 6px;
    padding: 2rem 4rem;

    position: relative;

    width: ${({width}) => width || '100%'};

    @media (max-width: 1349px){

        width: 100%;

        padding: 1rem;

    }

    @media (max-width: 1169px){

        overflow-x: scroll;

    }

`;