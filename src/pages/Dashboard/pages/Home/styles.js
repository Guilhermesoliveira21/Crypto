import styled from "styled-components";

export const ContainerDashboard = styled.section`

    display: flex;
    gap: 1rem;

    @media (max-width: 1349px){

      display: flex;
      align-items: center;
      flex-direction: column;

    }

`;

export const ContainerHeaderPrincipal = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    border-bottom: 1px solid #ccc;
    padding: 1rem 0;


    @media (max-width: 949px){

      display: flex;
      flex-direction: column;
      align-items: flex-start;

      gap: 1rem;
      /* flex-direction: column; */

      /* flex: 1; */

    }
    

`;

export const ContainerHeaderSubTitle = styled.div`

    p {
        margin-top: 6px;
        opacity: .8;
        font-size: 14px;
    }

`;

export const ContainerContentAside = styled.div`

    margin-top: 40px;

`;

export const ContainerTable = styled.table`

    /* background-color: #fff ; */
    width: 100%;
    border-collapse: collapse;
    border: none;

    @media (max-width: 1349px){

    overflow-y: scroll;

  }

    tbody td {
    padding: 1rem 1rem; 
}
tbody tr:hover {
        background-color: ${({theme}) => theme.BACKGROUND.primary};  /* Cor de fundo ao passar o mouse */
    }

    


tbody > tr > td > span {
    background-color: ${({theme}) => theme.BACKGROUND.primary};
    color: #0182F9;
    
    font-size: 12px;
    padding: 2px 6px;
    border-radius: 3px;
}

`;

export const ContainerTableHeader = styled.thead`

    th {
        padding: 1rem;
        text-align: start;
        font-size: 14px;
    }

    th, td {
    border: none;
    padding: 8px ;
  }

`

export const Loading = styled.div`

  padding: 6rem 10rem;
  
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  text-align: center;
`;

export const ContainerFooterPages = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 1.4rem;



`;

export const ContainerButtonPages = styled.div`

  gap: 1rem;

  margin: 0 1rem;

`;

export const ButtonPages = styled.button`

  background-color: transparent;
  border: none;

  font-size: 14px;
  opacity: .8;

  color: ${({theme}) => theme.COLORS.primary};

  margin: 0 6px;

  cursor: pointer;

  transition: .3s;

  &:hover {
    color: #0182F9;
    font-weight: 600;

  }

`;

export const CryptoNameLogo = styled.div`


  display: flex;
  align-items: center;

  img {
    width: 26px;
    margin-right: 10px;
  }

  span {
    background-color: ${({theme}) => theme.BACKGROUND.primary};
    color: #0182F9;
    
    font-size: 12px;
    padding: 2px 6px;
    border-radius: 3px;

    margin-left: 10px;
}

`;

// Aside

export const ContainerAsideLateral = styled.aside`

  padding: 1.4rem 0; 

`;

export const ContainerAsideLateralHeader = styled.header`

  display: flex;
  align-items: center;

  gap: 1rem;
  
  margin-top: 10px;

`;

export const ContainerAsideList = styled.div`

  height: 400px;

  display: flex;
  align-items: center;
  /* justify-content: center; */

  /* background-color: aqua; */
`;