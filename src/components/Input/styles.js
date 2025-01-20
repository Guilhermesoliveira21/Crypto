import styled from "styled-components";

export const ContainerInput = styled.div`

    width: 100%;

    margin-bottom: 1.4rem;

`;


export const InputStyle = styled.input`

    width: 100%;

    padding: 14px 24px;
    background-color: ${({theme}) => theme.BACKGROUND.secundary};

    border: none;

    border-radius: 6px;

    outline: none;

    transition: .1s;


    &[type="submit"] {
        background-color: ${({theme}) => theme.COLORS.secundary};
        color: #fff;
        cursor: pointer;
        
        &:hover {
            opacity: .8;
        }
    }
   

`;

export const ContainerCheckbox = styled.div`

    display: flex;

    gap: 10px;

    margin-bottom: 40px;

    label {
        opacity: .8;
        font-size: 14px;
    }

`;