import BannerImg from '../../../../assets/images/banner.png'
import { ButtonLink } from '../../../../components/Button'
import { BannerContent, ContainerBanner, ImageBanner } from './styles'


export const Banner = () => {

    return (
        <>
            <ContainerBanner id='#home'>
                <BannerContent>
                    <h1>Comprar & Vender</h1>
                    <h2>CryptoX Em Instantes</h2>
                    <p>Realize suas transações em instantes, de forma rápida, segura e descomplicada. Aproveite o melhor do mercado de criptomoedas agora mesmo! 🚀</p>
                    <div>
                        <ButtonLink link='/registrar' name='Comece a negociar'/>
                    </div>
                </BannerContent>
                <div>
                    <ImageBanner src={BannerImg} alt="" />
                </div>
            </ContainerBanner>
        </>
    )

}