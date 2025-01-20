import { useEffect, useState } from "react"
import { ButtonLink } from "../Button"
import { LogoCryptox } from "../Logo"
import { ContainerLinks, ContainerMobile, ContainerUl, FlexDirection, HeaderContainer, HeaderContainerMobile, HeaderProfile, LinkHeader, ListMenuLinks, ThemeColorTroca } from "./styles"
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { FaLightbulb } from "react-icons/fa";
import { MdNightlight } from "react-icons/md";
import { useAuth } from "../../contexts/AuthUser";
import userProfile from '../../assets/images/user.png';
import { IoIosArrowDown } from "react-icons/io";
import { ColorALink } from "../../pages/styles/styles";
import { Link } from "react-router-dom";


export const Header = ({ theme, click }) => {

    const [isOpen, setIsOpen] = useState(false);
    const { isLogin, logout, error } = useAuth();

    function toggleMenu() {
        setIsOpen((active) => !active);
    }

    useEffect(() => {

        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        }

    }, [isOpen])


    return (
        <>
            <HeaderContainer isLogin={isLogin}>
                {isLogin ?
                    <ColorALink href="/dashboard">
                        <LogoCryptox />
                    </ColorALink>
                    :

                    <ColorALink href="/">
                        <LogoCryptox />
                    </ColorALink>
                }
                {isLogin ?
                    <ContainerUl>
                        <li><LinkHeader to="/dashboard">Dashboard</LinkHeader></li>
                        <li><LinkHeader to="/dashboard/my-cryptos">Minhas Cryptos</LinkHeader></li>
                        <li><LinkHeader to="/configuracoes">Configurações</LinkHeader></li>
                    </ContainerUl>
                    :

                    <ContainerUl>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#crypto">Cryptox</a></li>
                        <li><a href="#portifolio">Portifolio</a></li>
                        <li><a href="#benefious">Benefios</a></li>
                    </ContainerUl>
                }
                <ContainerLinks>
                    <div onClick={click}>

                        {theme ?
                            <ThemeColorTroca>
                                <FaLightbulb />
                            </ThemeColorTroca>
                            :
                            <ThemeColorTroca>
                                <MdNightlight />
                            </ThemeColorTroca>
                        }



                    </div>

                    {isLogin ?
                        <>
                            <HeaderProfile>
                                <img src={userProfile} alt={isLogin.user.name} />
                                <p>{isLogin.user.name}</p>
                                <IoIosArrowDown />

                            </HeaderProfile>
                            <div onClick={logout}>
                                <ButtonLink
                                    bg='red'
                                    color='#fff'
                                    name='Sair'
                                />
                            </div>
                        </>
                        :

                        <>
                            <ButtonLink
                                bg={!theme ? '#E9EAEF' : 'transparent'}
                                color='#5367FF'
                                name='Entrar'
                                link='/entrar' />
                            <ButtonLink
                                name='Registre-se'
                                link='/registrar' />
                        </>

                    }


                </ContainerLinks>

                <FlexDirection>

                    <ContainerMobile onClick={click}>

                        {theme ?
                            <ThemeColorTroca>
                                <FaLightbulb />
                            </ThemeColorTroca>
                            :
                            <ThemeColorTroca>
                                <MdNightlight />
                            </ThemeColorTroca>
                        }



                    </ContainerMobile>

                    <ContainerMobile onClick={toggleMenu}>
                        {!isOpen ? <FaBars size={30} /> : <IoCloseSharp size={30} />}
                    </ContainerMobile>
                </FlexDirection>



            </HeaderContainer>

            <HeaderContainerMobile openMenu={isOpen}>
                {isOpen ?

                    <>
                        {isLogin ? <>

                            <ListMenuLinks>
                                <li><Link to="/dashboard">Dashboard</Link></li>
                                <li><Link to="/dashboard/my-cryptos">Minhas Cryptos</Link></li>
                                <li><Link to="/dashboard/configuracoes">Configurações</Link></li>
                            </ListMenuLinks>
                            <hr />
                            <br />
                            <div onClick={logout}>
                                <ButtonLink
                                    bg='red'
                                    color='#fff'
                                    name='Sair'
                                />
                            </div>
                            
                        </> : (
                            <>
                                <ListMenuLinks>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Cryptox</a></li>
                                    <li><a href="">Portifolio</a></li>
                                    <li><a href="">Benefios</a></li>
                                </ListMenuLinks>
                                <hr />
                                <br />
                                <div>
                                    <ButtonLink
                                        bg={!theme ? '#E9EAEF' : 'transparent'}
                                        color='#5367FF'
                                        name='Entrar'
                                        link='/entrar' />
                                    <br />
                                    <ButtonLink
                                        name='Registre-se'
                                        link='/registrar' />
                                </div></>
                        )}
                    </>

                    : ''}

            </HeaderContainerMobile>
        </>
    )
}