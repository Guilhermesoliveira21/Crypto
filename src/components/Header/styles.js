import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`

    background-color: ${({isLogin, theme}) => isLogin ? theme.BACKGROUND.secundary : 'transparent'};
   
    padding: ${({isLogin}) => isLogin ? '2.4rem 4rem' : '2.4rem 0'};

    margin-bottom: ${({isLogin}) => isLogin ? '3rem' : '0'};
    border-radius: ${({isLogin}) => isLogin ? '6px' : '0'};
   
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        /* background-color: aqua; */
        padding: 2rem 1rem;
    }


`

export const ContainerUl = styled.ul`

    display: flex;
    align-items: center;
    gap: 1.4rem;
    list-style: none;

    li a {
        text-decoration: none;
        color: ${({ theme }) => theme.COLORS.primary};
        font-weight: 500;
        transition: all.2s;
        border: 2px solid transparent;
        padding-bottom: 20px;
    }
    
    li a:hover {
        color: ${({ theme }) => theme.COLORS.secundary};
        border-bottom: 2px solid ${({ theme }) => theme.COLORS.secundary};;
    }

    li .active:active {
        color: ${({ theme }) => theme.COLORS.secundary};
        border-bottom: 2px solid ${({ theme }) => theme.COLORS.secundary};;
    }

    @media (max-width: 1099px){
        background-color: blueviolet;
        display: none;
    }

`

export const LinkHeader = styled(NavLink)`

    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.primary};
    font-weight: 500;
    transition: all.2s;
    border: 2px solid transparent;
    padding-bottom: 20px;

    &:hover {
        color: ${({ theme }) => theme.COLORS.secundary};
        border-bottom: 2px solid ${({ theme }) => theme.COLORS.secundary};;
    }

    &:active {
        color: ${({ theme }) => theme.COLORS.secundary};
        border-bottom: 2px solid ${({ theme }) => theme.COLORS.secundary};;
    }


`

export const ContainerLinks = styled.div`

    display: flex;
    align-items: center;
    
    gap: 1.2rem;
    @media (max-width: 1099px){
        background-color: blueviolet;
        display: none;
    }
`;

export const ThemeColor = styled.div`

    background-color: black;
    width: 60px;
    height: 30px;

    border-radius: 20px;

`;

export const ContainerMobile = styled.div`



    @media (min-width: 1099px){
            background-color: blueviolet;
            display: none;
        }
`;

export const HeaderContainerMobile = styled.header`

z-index: 99999;

    @media (min-width: 1099px){
        display: none;
    }

    background-color: ${({theme}) => theme.BACKGROUND.secundary};
    box-shadow: 0 0 4px #bfbfbf;

    border-radius: 0 10px 0 0;

    transition: .3s;

    width: ${({openMenu}) => openMenu ? '89%' : '0%'};

    height: 89%;
    position: absolute;
    left: 0px;

    display: flex;
    flex-direction: column;

    /* justify-content: center;; */

    padding: ${({openMenu}) => openMenu ? '2rem 3rem' : '0%'};;


    `;

export const ListMenuLinks = styled.ul`

    list-style: none;
    gap: .5rem;

    li {
        margin-bottom: 20px;

        /* text-align: center; */
    }

    li > a {
        font-size: 1.4rem;
        font-weight: 600;

        color: ${({theme}) => theme.COLORS.primary};
    }

`;

export const ThemeColorTroca = styled.div`

    height: 40px;
    width: 40px;

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({theme}) => theme.BACKGROUND.secundary};

`;

export const FlexDirection = styled.div`

@media (min-width: 1099px){
            background-color: blueviolet;
            display: none;
        }

    display: flex;
    align-items: center;

    gap: .6rem;

`;

export const MobileSome = styled.div`

@media (max-width: 1099px){
        display: none;
    }

`;

export const HeaderProfile = styled.div`

    display: flex;
    align-items: center;

    img {
        width: 40px;
        margin-right: 14px;
    }

`;