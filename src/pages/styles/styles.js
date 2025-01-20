import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerForm = styled.section`

    /* background-color: aqua; */
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 2px;

    @media (max-width: 768px) {
        margin: 10rem 0;
        flex-direction: column-reverse;
}
    

`;

export const ContainerContent = styled.form`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: ${({width}) => width || '100%'};
    background-color: ${({bg, theme}) => !bg ? theme.BACKGROUND.primary : bg};

    height: 100%;

    @media (max-width: 768px) {
        background-color: transparent;
        width: 100%;
        height: 100%;
        margin-top: 6rem;
        
}

    

`;

export const TextAling = styled.div`

    text-align: ${({aling}) => aling || 'center'};

`;

export const ColorLink = styled(Link)`

    color: ${({theme}) => theme.COLORS.secundary};
    text-decoration: none;

`

export const ColorALink = styled.a`
color: ${({theme}) => theme.COLORS.secundary};
text-decoration: none;
`;