import { Container, CustomImage } from "./styles";

export const ImgButton = ({sourceImage}) => {
    return (
        <Container>
            <CustomImage source={sourceImage} />
        </Container>
    )
};