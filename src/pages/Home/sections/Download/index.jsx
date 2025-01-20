import { ContaineDownload, ImageLoad } from "./styles"
import app from '../../../../assets/images/app.png'
import { SubTitle } from "../../components/SubTitle"
import { CardProfile } from "../../components/CardProfile"
import { TbWorldWww } from "react-icons/tb";
import { ContainerCardProfile } from "../Profile/styles";
import { IoLogoGooglePlaystore } from "react-icons/io5";

export const Download = () => {
    return (

        <ContaineDownload>
            <div>
                <ImageLoad src={app} alt="" />
            </div>
            <div>
                <SubTitle 
                    title='Download App'
                    subTitle='Negocie em qualquer lugar, a qualquer hora'
                    text='Tenha o controle das suas criptomoedas na palma da mão. Com nosso aplicativo, você pode comprar, vender e acompanhar o mercado onde e quando quiser. Faça o download agora e esteja sempre conectado! 📱🚀'
                    aling='start'
                    width='100%'
                />
                <ContainerCardProfile>

                <CardProfile 
                    bg='#121318'
                    mt='2rem'
                    height='auto'
                    icon={<TbWorldWww size={48}/>}
                    title='Navegador Web'
                />
                <CardProfile 
                    bg='#121318'
                    mt='2rem'
                    height='auto'
                    icon={<IoLogoGooglePlaystore  size={48}/>}
                    title='Google Play'
                />
               
                </ContainerCardProfile>
            </div>
        </ContaineDownload>

    )
}