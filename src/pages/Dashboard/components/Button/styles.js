import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerButtonBg = styled.button`

    background-color: ${({theme}) => theme.COLORS.secundary};
    padding: 10px 24px;
    border-radius: 6px;

    color: #fff;
    
    cursor: pointer;

    transition: .2s;

    border: transparent;

    &:hover {
        opacity: .8;
    }

`

export const ContainerButton = styled.button`

    background-color: transparent;
    color: ${({theme}) => theme.COLORS.secundary};

    border: none;

    font-weight: 500;

    font-size: 1rem;

    border-bottom: 2px solid transparent;
    cursor: pointer;

    &:hover {
        opacity: .8;
        border-bottom: 2px solid ${({theme}) => theme.COLORS.secundary};
    }

`;

export const ContainerLink = styled(Link)`

    text-align: center;

    text-decoration: none;
    color: ${({theme}) => theme.COLORS.secundary};

    transition: 2s;

    &:hover {
        color: ${({theme}) => theme.COLORS.secundary};
        opacity: .8;
    }

`