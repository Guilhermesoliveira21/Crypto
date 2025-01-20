import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HeaderFormulario } from "../components/HeaderFormulario";

export const MainLayout = ({ theme, click }) => {
  return (
    <>
      <Header theme={theme} click={click} />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </>
  );
};


export const SecundaryLayout = ({ theme, click }) => {
    return (
     <>
     <HeaderFormulario theme={theme} click={click}/>
      <main>
        <Outlet /> 
      </main>
     </>
    );
  };