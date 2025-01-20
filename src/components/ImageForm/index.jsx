import { Container } from "./styles"

export const ImageForm = ({image}) => {

    return (
        <Container >
            <img src={image} alt="Image" />
        </Container>
    )

}