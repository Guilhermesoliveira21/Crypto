import { Link } from "react-router-dom"
import { ContainerButton, ContainerButtonBg, ContainerLink } from "./styles"

export const Button = ({ button, to, type, children, bg, onClick, value }) => {

    return (
        <>
            <div>
                {
                    button ? (
                        bg ? (
                            <ContainerButtonBg value={value} onClick={onClick} type={type}>{children}</ContainerButtonBg>
                        ) : (
                            <ContainerButton value={value} onClick={onClick} type={type}>{children}</ContainerButton>
                        )
                    ) : (
                        // Renderize o link quando `button` for falso
                        <ContainerLink onClick={onClick} to={to}>{children}</ContainerLink>
                    )
                }

            </div>
        </>
    )

}