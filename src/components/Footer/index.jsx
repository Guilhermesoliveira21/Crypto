import { Link } from "react-router-dom"
import { LogoCryptox } from "../Logo"
import { FooterBotton, FooterContainer, FooterContainerBotton, FooterContent, LinkFooter, PlayStore } from "./styles"
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { useAuth } from "../../contexts/AuthUser";
import { LinkHeader } from "../Header/styles";

export const Footer = () => {

    const { isLogin, logout, error } = useAuth();

    return (

        <>
            <FooterContainer>
                <FooterContent>
                    <LogoCryptox />
                    <p>Realize suas transações em instantes, de forma rápida, segura e descomplicada. Aproveite o melhor do mercado de criptomoedas agora mesmo! 🚀</p>
                </FooterContent>
                <FooterContent>
                    <h3>Links</h3>
                    <ul>
                        {isLogin ? <>

                            <li><LinkHeader to="/dashboard">Dashboard</LinkHeader></li>
                            <li><LinkHeader to="/dashboard/my-cryptos">Minhas Cryptos</LinkHeader></li>
                            <li><LinkHeader to="/configuracoes">Configurações</LinkHeader></li>

                        </> : (
                            <>
                                <li>
                                    <a href="#home">Home</a>
                                </li>
                                <li>
                                    <a href="#">CryptoX</a>
                                </li>
                                <li>
                                    <a href="#">Portifolio</a>
                                </li>
                                <li>
                                    <a href="#">Beneficios</a>
                                </li></>
                        )}
                    </ul>
                </FooterContent>
                <FooterContent>
                    <h3>Contato</h3>
                    <ul>
                        <li>
                            <a href="mail:gs6758024@gmail.com">gs6758024@gmail.com</a>
                        </li>
                        <li>
                            <a href="mail:Guilherme.dev1@outlook.com">Guilherme.dev1@outlook.com</a>
                        </li>
                        <li>
                            <a href="">(11) 97962-3588</a>
                        </li>
                    </ul>
                </FooterContent>

            </FooterContainer>
            {/* <hr /> */}
            <FooterBotton>
                <FooterContainerBotton>
                    <h5>&copy; 2024 CryptoX. Todos os direitos reservados.</h5>
                    <p><LinkFooter>Politica de Privacidade</LinkFooter></p>
                    <p><LinkFooter>Site map</LinkFooter></p>
                </FooterContainerBotton>
                <PlayStore>
                    <IoLogoGooglePlaystore />
                    <h5>Play Store</h5>
                </PlayStore>
            </FooterBotton>
        </>

    )
}