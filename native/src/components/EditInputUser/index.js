import colors from "../../themes/colors";
import { Container, NameInput, InputContainer, CustomInput } from "./styles";


export const EditInputUser = ({name, placeHolder, value, onChangeText, autoCapitalize, secureTextEntry}) => {
    return (
        <Container>
            <NameInput>
                {name}
            </NameInput>
            <InputContainer>
                <CustomInput
                    placeholder={placeHolder}
                    placeholderTextColor={colors.quaternary}
                    value={value}
                    onChangeText={onChangeText}
                    autoCapitalize={autoCapitalize}
                    secureTextEntry={secureTextEntry}
                />
            </InputContainer>
        </Container>
    )
};