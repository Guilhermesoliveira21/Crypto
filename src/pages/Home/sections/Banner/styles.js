import styled from "styled-components";

export const ContainerBanner = styled.section`

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 4rem 6rem;

    border-radius: .8rem;

    background-color: ${({ theme }) => theme.BACKGROUND.secundary};

    @media (max-width: 1199px) {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: space-between;

        padding: 2rem 3rem;
    }

`

export const BannerContent = styled.div`

    h1 {
        font-size: 3rem;

        @media (max-width: 1409px) {
            font-size: 2.6rem;
        }

        @media (max-width: 1199px) {
            font-size: 3rem;
        }

        @media (max-width: 849px) {
            font-size: 2.4rem;
        }

        @media (max-width: 767px) {
            font-size: 1.8rem;
        }

    }

    h2 {
        font-size: 3rem;
        color: ${({ theme }) => theme.COLORS.secundary};

        @media (max-width: 1409px) {
            font-size: 2.6rem;
        }

        @media (max-width: 1199px) {
            font-size: 3rem;
        }

        @media (max-width: 849px) {
            font-size: 2.4rem;
        }

        @media (max-width: 767px) {
            font-size: 1.8rem;
        }
    }

    p {
        margin: 2rem 0;

        width: 70%;
       
        @media (max-width: 1409px) {
            width: 100%;
        }

        @media (max-width: 1199px) {
            font-size: 16px;
            width: 100%;
        }

    }

    div{
        width: 40%;
        text-align: center;

        @media (max-width: 1199px) {
            text-align: center;
            width: 100%;
        }
    }

`;

export const ImageBanner = styled.img`

    width: 100%;

`;