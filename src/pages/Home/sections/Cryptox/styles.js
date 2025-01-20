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

`;

export const ContainerLink = styled.div`

    display: flex;
    align-items: center;
    

    margin-top: 3rem;
`;

export const LinkProfile = styled(Link)`

    color: ${({theme}) => theme.COLORS.secundary};
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 600;

    border-bottom: 2px solid ${({theme}) => theme.COLORS.secundary};

`