import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.footer`

    background-color: ${({ theme }) => theme.BACKGROUND.secundary};
    padding: 4rem 6rem;

    border-radius: 20px 20px 0 0 ;

    margin-top: 4rem;

    display: flex;
    align-items: start;
    justify-content: center;
    gap: 16rem;

    border-bottom: 1px solid ${({ theme }) => theme.BACKGROUND.primary};

    @media (max-width: 1199px) {
        padding: 1rem 2rem;
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        gap: 2rem;
    }

`;

export const FooterContent = styled.div`

    width: 33%;
    @media (max-width: 1199px) {
        
        width: 100%;

    }

    p{
        margin-top: 2rem;

        @media (max-width: 1199px) {

            margin-top: 1rem;
        }
    }

    h3 {
        font-size: 1.2;
    }

    ul {
        margin-top: 2rem;
        text-decoration: none;
        list-style: none;

        @media (max-width: 1199px) {

            margin-top: 1rem;
        }

        li {
            margin-bottom: 1rem;
        }

        li > a {
            color: ${({ theme }) => theme.COLORS.primary};
            opacity: .8;
            font-size: 17px;
            text-decoration: none;
            font-weight: 600;
            transition: 0.3s; 
            
            li > a:hover {
                transform: scale(1.3) translate(10px); /* Combine scale e translate */
                color: blue;
            }
        }
    }

`;

export const FooterBotton = styled.footer`

  background-color: ${({ theme }) => theme.BACKGROUND.secundary};
  padding: 2rem 6rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1199px) {

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        padding: 1rem 2rem;
    }

`;

export const LinkFooter = styled(Link)`
    color: ${({ theme }) => theme.COLORS.primary};
    opacity: .8;
    font-size: 14px;
    text-decoration: none;
    font-weight: 600;
    transition: 0.3s; 

`;

export const FooterContainerBotton = styled.div`

    display: flex;
    align-items: center;

    @media (max-width: 1199px) {

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        padding: 0;
}

    /* gap: 4rem; */
    h5 {
        padding-right: 30px;
    }

    p {
        border-left: 2px solid ${({ theme }) => theme.COLORS.secundary};
        padding: 0 20px;
        @media (max-width: 1199px) {
            padding: 0 0;

            width: 100%;
            border: none;

            margin-top: 10px;
        }
    };

`;

export const PlayStore = styled.div`

    display: flex;
    gap: .4rem;

    background-color: ${({ theme }) => theme.BACKGROUND.primary};
    padding: 10px 22px;
    border-radius: 4px;

    @media (max-width: 1199px) {
    
        margin-top: 20px;
        width: 100%;

        /* text-align: center; */
    }
`;