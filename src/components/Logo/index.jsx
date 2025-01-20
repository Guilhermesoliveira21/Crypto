import logo from '../../assets/images/logo.png'
import { Image, LogoContainer, LogoText } from './styles'

export const LogoCryptox = () => {

    return (
        <LogoContainer>
            <Image src={logo} alt="" />
            <LogoText>Crypto X</LogoText>
        </LogoContainer>
    )

}