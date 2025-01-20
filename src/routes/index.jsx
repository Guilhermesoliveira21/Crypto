import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Register } from "../pages/Register";
import { MainLayout, SecundaryLayout } from "./Layouts";
import { Login } from "../pages/Login";
import { DashboardHome } from "../pages/Dashboard/pages/Home";
import { useAuth } from "../contexts/AuthUser";
import { CryptoPage } from "../pages/Dashboard/pages/Crypto";
import { MyCrypto } from "../pages/Dashboard/pages/MyCryptos";
import { MyCrypt } from "../pages/Dashboard/pages/MyCrypto";

export const RoutesCrypto = ({ theme, click }) => {
  const { isLogin } = useAuth();

  const ProtectedRoute = ({ children }) => {
    if (!isLogin) {
      return <Navigate to="/entrar" replace />;
    }
    return children; 
  };

  const PublicRoute = ({ children }) => {
    if (isLogin) {

      return <Navigate to="/dashboard" replace />;
    }
    return children; 
  };

  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<MainLayout theme={theme} click={click} />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="/registrar" element={<SecundaryLayout theme={theme} click={click} />}>
          <Route index element={<Register />} />
        </Route>

        <Route path="/entrar" element={<SecundaryLayout theme={theme} click={click} />}>
          <Route index element={<PublicRoute><Login /></PublicRoute>} />
        </Route>

      
        <Route path="/dashboard" element={<ProtectedRoute><MainLayout theme={theme} click={click} /></ProtectedRoute>}>
          <Route index element={<DashboardHome />} />
          <Route path="my-cryptos" element={<MyCrypto />} /> 
          <Route path="my-crypto/:symbol" element={<MyCrypt />} /> 
        </Route>

        <Route path="/dashboard/crypto/:symbol/:crypto" element={<ProtectedRoute><MainLayout theme={theme} click={click} /></ProtectedRoute>}>
          <Route index element={<CryptoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
