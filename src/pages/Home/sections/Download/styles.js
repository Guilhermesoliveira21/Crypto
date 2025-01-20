import styled from "styled-components";

export const ContaineDownload = styled.section`

    margin-top: 590px;

    display: flex;
    align-items: center;
    
    @media (max-width: 1489px) { 
        margin-top: 600px;
    }

    @media (max-width: 1479px) { 
        margin-top: 670px;
    }

    @media (max-width: 1429px) { 
        margin-top: 720px;
    }

    @media (max-width: 1119px) { 
        margin-top: 1210px;

        display: flex;
        flex-direction: column;
    }

    @media (max-width: 429px) { 
        margin-top: 1310px;

        display: flex;
        flex-direction: column;
    }
`;

export const ImageLoad = styled.img`

    width: 100%;

`