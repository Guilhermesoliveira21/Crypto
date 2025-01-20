import styled from "styled-components";

export const ConatainerCardProfile = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;

    margin-top: ${({mt}) => mt || '0px'};

    @media (max-width: 1119px) {

       
        display: flex;
        flex-direction: column-reverse;
    }

    div {
        background-color: ${({ bg, theme }) => bg || theme.BACKGROUND.primary};
        padding: 1rem 2rem;
        border-radius: 6px;

        width: 500px;
        height: ${({height}) => height || '160px'} ;
        box-shadow: 0 0 4px #00000021;

        @media (max-width: 1199px) {
           
            width: 100%;
        }
    }
    

    div > h4 {
        padding: .6rem 0;
    }

    div > p {
        opacity: .8;
        font-size: 15px;
    }

`;