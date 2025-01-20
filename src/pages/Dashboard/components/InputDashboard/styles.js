import styled from "styled-components";

export const ContainerInput = styled.div`

    position: relative;
    width:${({width}) => width || '36%'};
    box-sizing: border-box;

    @media (max-width: 949px){
        width: 100%;
    }

    div {
        position: absolute;
        top: 12px;
        right: 20px;
        opacity: .7;
    }

`;

export const InputDashboardStyle = styled.input`

    border: 1px #ccc solid;
    padding: 12px 26px;
    border-radius: 4px;

    outline: none;
    opacity: .8;
    color: ${({theme}) => theme.COLORS.primary};

    background-color: transparent;

    width: ${({width}) => width || '100%'};

   

`;