import styled from "styled-components";

export const ContainerDetail = styled.div`

    display: flex;
    /* flex-direction: column; */
    
    gap: 1rem;

    @media (max-width: 768px) {
        /* background-color: aqua; */
        flex-direction: column;
    }

    div {
      
        margin-bottom: 1rem;
    
    gap: 1rem;

    }

`

export const Formulario = styled.form`

    width: 100%;
    height: 40vh;
    /* background-color: aqua; */

    border: 1px solid #ccc;
    border-radius: 6px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        button {
            background-color: ${({ bg }) => bg || '#5367FF'};
            padding: 10px 24px;
            color: ${({ color }) => color || '#fff'};
            border-radius: 6px;

            text-decoration: none;
            cursor: pointer;
            width: 100%;

            border: none;
            transition: .2s;
            &:hover {
                opacity: .8;
            }
        }
    }

`;