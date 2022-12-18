import styled from "styled-components/native";
import colors from "../../themes/colors";

export const MainButton = styled.TouchableOpacity`
    height: 33px;
    width: 131px;
    border-radius: 5px;
    margin-top: 40px;
    margin-bottom: 5px;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 4px ${colors.primary};
    background-color: ${colors.fivenary};
`;

export const ButtonText = styled.Text`
    color: ${colors.primary};
    font-size: 14px;
    align-self: center;
    position: absolute;
    font-family: "sans-serif";
    font-style: normal;
    font-weight: bold;
    line-height: 20px;
`;