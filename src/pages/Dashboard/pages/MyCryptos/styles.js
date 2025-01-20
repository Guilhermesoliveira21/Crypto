import styled from "styled-components";

export const ContainerHeader = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        /* background-color: aqua; */
        flex-direction: column;
        align-items: start;
        width: 100%;

        gap: 1rem;
    }

`;