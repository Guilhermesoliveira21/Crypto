import { SectionSpace } from "../../../styles/SectionSpace"
import { Card } from "../../components/card"
import { SubTitle } from "../../components/SubTitle"
import { Profile } from "../Profile"



export const Cryptox= () => {
    return (
        <SectionSpace vertical='3rem' id="#crypto">
            <SubTitle 
                title='Principais Cryptos'
                subTitle='Obtenha várias criptomoedas'
            />
            <Card />

            {/* Perfil */}
            <Profile />
            
            
        </SectionSpace>
    )
}