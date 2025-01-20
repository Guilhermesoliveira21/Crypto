import styled from "styled-components";

export const ContainerHeader = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;

  
    @media (max-width: 768px) {
        /* background-color: aqua; */
        flex-direction: column;
        align-items: start;
        width: 100%;

        gap: 1rem;
    }

`;

export const ContainerGToMy = styled.div`

    display: flex;
    
    gap: 1rem;

    height: 100%;

    @media (max-width: 1380px) {
        /* background-color: aqua; */
        flex-direction: column;
        align-items: start;
        width: 100%;

    }


`;

export const MyCriptos = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 1rem;


`;

export const LinkVoltar = styled.div`

    position: absolute;
    bottom: 20px;

    @media (max-width: 768px) {
        /* background-color: aqua; */
        position: absolute;
        bottom: -20px;
    }

`;
