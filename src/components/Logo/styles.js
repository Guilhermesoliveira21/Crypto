import styled from "styled-components";

export const LogoContainer = styled.div`

    display: flex;
    align-items: center;

    border-right: 2px #ccc solid;

`

export const Image = styled.img`

    width: 60px;
    padding-right: 8px;

`

export const LogoText = styled.h4`

    color: ${({theme}) => theme.COLORS.primary};
    padding-right: 22px;
    font-size: 20px;

`
