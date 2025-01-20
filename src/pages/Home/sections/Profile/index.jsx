import { CardProfile } from "../../components/CardProfile";
import { SubTitle } from "../../components/SubTitle";
import { ContainerCardProfile, ContainerLink, ContainerLinkMobile, ContainerMain, ContainerProfile, LinkProfile, LinkProfileMobile, ProfileCard } from "./styles"
import { FaArrowCircleRight } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { VscGraph } from "react-icons/vsc";
import { FaMoneyCheckDollar } from "react-icons/fa6";


export const Profile = () => {
    return (
        <ContainerMain>
            <ContainerProfile>
                <div>
                    <SubTitle
                        title='Criar seu perfil'
                        subTitle='Maneira fácil de começar'
                        text='Crie seu perfil de forma rápida e descomplicada. A melhor maneira de dar o primeiro passo no universo das criptomoedas está ao seu alcance! 🚀'

                        width='90%'
                        aling='start' />
                    <ContainerLink>
                        <LinkProfile to='/registrar'>
                            Comece a negociar
                            &nbsp;
                            <FaArrowCircleRight size={16} color="#5367FF" />
                        </LinkProfile>
                    </ContainerLink>
                </div>
                <ProfileCard>
                    <div>
                        <ContainerCardProfile>
                            <CardProfile
                                icon={<VscGraph size={40} color="#5367FF" />}
                                title='Comece a Negociar '
                                description='Compre e venda sua CryptoX moeda com os melhores preços'
                            />

                            <CardProfile
                                icon={<FaMoneyCheckDollar  size={40} color="#5367FF" />}
                                title='Adicionar fundos à carteira'
                                description='Adicione dinheiro rapidamente à sua carteira de investimentos'
                            />
                        </ContainerCardProfile>
                    </div>
                    <br />
                    <div>
                        <ContainerCardProfile>
                            <CardProfile
                                icon={<FaUserPlus size={40} color="#5367FF" />}
                                title='Criar uma conta'
                                description='inscreva-se com seu e-mail em apenas 5 minutos'
                            />
                            <CardProfile
                                icon={<FaUserPlus size={40} color="#5367FF" />}
                                title='Criar uma conta'
                                description='inscreva-se com seu e-mail em apenas 5 minutos'
                            />
                        </ContainerCardProfile>
                    </div>
                    <ContainerLinkMobile>
                        <LinkProfileMobile to='/registrar'>
                            Comece a negociar
                            &nbsp;
                            <FaArrowCircleRight size={16} color="#5367FF" />
                        </LinkProfileMobile>
                    </ContainerLinkMobile>
                </ProfileCard>

            </ContainerProfile>
        </ContainerMain>
    )
}