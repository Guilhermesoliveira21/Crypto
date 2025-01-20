import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerMain = styled.div`

    position: static;
    /* background-color: black; */

`;

export const ContainerProfile = styled.div`

    
    padding: 4rem 8rem;

    background-color: ${({theme}) => theme.BACKGROUND.secundary};
    position: absolute;
    left: 0;
    width: 100%;

    display: flex;
    align-items: center;

    @media (max-width: 1119px) {

    display: flex;
    flex-direction: column;
    }

    @media (max-width: 1199px) {
            padding: 1rem 2rem;
        }

`;

export const ContainerLink = styled.div`

    display: flex;
    align-items: center;
    

    margin-top: 3rem;

    @media (max-width: 1119px) {

        display: none;
        flex-direction: column;
    }
`;

export const LinkProfile = styled(Link)`

    color: ${({theme}) => theme.COLORS.secundary};
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 600;

    border-bottom: 2px solid ${({theme}) => theme.COLORS.secundary};

`

export const ContainerCardProfile = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    gap: 1rem;

    margin-left: ${({margin}) => margin || '0px'};

    @media (max-width: 1119px) {

        display: flex;
        flex-direction: column;

        margin-top: 2rem;
    }

`; 

export const ProfileCard = styled.div`

    display: block;
    width: 100%;

`;


export const ContainerLinkMobile = styled.div`

    display: flex;
    align-items: center;
    

    margin-top: 3rem;
    display: none;

    @media (max-width: 1119px) {

        display: flex;
        flex-direction: column;
    }
`;

export const LinkProfileMobile = styled(Link)`

    color: ${({theme}) => theme.COLORS.secundary};
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 600;

    border-bottom: 2px solid ${({theme}) => theme.COLORS.secundary};

`