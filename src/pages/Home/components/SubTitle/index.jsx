import { Container, ContainerSubTitle } from "./styles"

export const SubTitle = ({ title, subTitle, text, aling, width }) => {

    return (

        <Container aling={aling}>
            <ContainerSubTitle aling={aling} width={width}>
                <h2>{title}</h2>
                <h3>{subTitle}</h3>
                <p>{text}</p>
            </ContainerSubTitle>
        </Container>

    )

}