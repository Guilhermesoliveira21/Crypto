import styled from "styled-components";

export const Container = styled.div`

    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: ${({aling}) => aling || 'center'};

`;

export const ContainerSubTitle = styled.div`

    text-align: ${({aling}) => aling || 'center'};

    padding: 0 0rem;

    width: ${({width}) => width || '40%'};

    @media (max-width: 1199px) {
        width: 100%;
    }

    h2 {
        font-size: 1rem;
        line-height: 2.4rem;

        color: ${({theme}) => theme.COLORS.secundary};

        @media (max-width: 949px) {
            font-size: .8rem;
        }
    }

    h3 {
        font-size: 2rem;

        @media (max-width: 949px) {
            font-size: 1.4rem;
        }
    }

    p{
        margin-top: 14px;
        opacity: .8;
    }

`;