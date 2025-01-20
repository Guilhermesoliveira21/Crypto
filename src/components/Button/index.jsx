import { ContainerButtonLink } from "./styles"

export const ButtonLink = ({name, link, bg, color}) => {

    return (
       
            <ContainerButtonLink to={link} bg={bg} color={color}>
                {name}
            </ContainerButtonLink>
      
    )

}