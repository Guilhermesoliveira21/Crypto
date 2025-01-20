import { FaLightbulb } from "react-icons/fa"
import { ThemeColorTroca } from "../Header/styles"
import { LogoCryptox } from "../Logo"
import { MdNightlight } from "react-icons/md"
import { ContainerHeaderForm } from "./styles"
import { Link } from "react-router-dom"
import { ColorALink, ColorLink } from "../../pages/styles/styles"

export const HeaderFormulario = ({ theme, click }) => {

    // console.log(theme)

    return (

        <>

            <ContainerHeaderForm>
                <ColorALink href='/'>
                    <LogoCryptox />
                </ColorALink>
                <div>
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
                </div>
            </ContainerHeaderForm>

        </>
    )

}