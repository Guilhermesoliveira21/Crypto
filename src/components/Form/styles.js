import styled from "styled-components";

export const ContainerForm = styled.div`

    width: 70%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 3rem;

    height: 70%;

`;

export const FormTitle = styled.div`

    h2 {
        font-size: 2.4rem;
        font-weight: 500;
    }

`;

export const ContainerOptionsOfLogin = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 3rem;

`;

export const FundoGoogle = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 8px;
    border-radius: 4px;

    background-color: ${({theme}) => theme.BACKGROUND.secundary};

    cursor: pointer;

`

