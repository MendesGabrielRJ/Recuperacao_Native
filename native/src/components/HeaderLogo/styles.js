import styled from "styled-components/native";
import colors from "../../themes/colors.js";

export const Container = styled.View`
  align-self: flex-start;
  width: 100%;
  height: 77px;
  background-color: ${colors.secondary};
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
  align-items: center;
  padding: 0 10px 0 10px;
`;

export const TitleContainer = styled.View`
  margin-left: 20px;
`;

export const Title = styled.Text`
    color: ${colors.secondary};
    font-weight: 800;
    font-size: 24px;
    margin-top: 42px;
    font-weight: bold;
`;

export const Logo = styled.Image`
    width: 380px;
    height: 200px;
    margin-top: -200px;
`;






