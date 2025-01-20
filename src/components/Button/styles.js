import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerButtonLink = styled(Link)`

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${({bg}) => bg || '#5367FF'};
    padding: 10px 24px;
    color: ${({color}) => color || '#fff'};
    border-radius: 6px;

    text-decoration: none;
`