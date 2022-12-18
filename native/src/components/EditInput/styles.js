import styled from "styled-components/native";
import colors from "../../themes/colors";

export const Container = styled.View`
  margin-top: 30px;
`;

export const NameInput = styled.Text`
    font-family: "Roboto";
    font-weight: 400;
    font-size: 14px;
`;

export const InputContainer = styled.View`
    flex-direction: row;
`;

export const CustomInput = styled.TextInput`
    height: 31px;
    width: 188px;
    border-radius: 5px;
    padding-left: 5px;
    font-family: sans-serif;
    margin-bottom: 5px;
    box-shadow: 0 4px 4px ${colors.primary};
    background-color: ${colors.fivenary};
`;

