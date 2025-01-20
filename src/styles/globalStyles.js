import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        /* overflow: hidden; */
    }

    body {
        background-color: ${({ theme }) => theme.BACKGROUND.primary};
        color: ${({ theme }) => theme.COLORS.primary};

        overflow-x: hidden;

        transition: all .3s;

        padding: 0 8rem;

        @media (max-width: 1489px) { 
            padding: 0 6rem;
    }

        @media (max-width: 1479px) { 
            padding: 0 4rem;
        }

        @media (max-width: 1429px) { 
            padding: 0 4rem;
        }

        @media (max-width: 1119px) { 
            padding: 0 4rem;
        }

        @media (max-width: 879px) { 
            padding: 0 2rem;
        }

        @media (max-width: 469px) { 
            padding: 0 1rem;
        }
    }

`
