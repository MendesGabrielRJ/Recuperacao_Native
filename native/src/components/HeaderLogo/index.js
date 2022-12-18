import { Title, Logo } from "./styles.js";

export const HeaderLogo = ({ title}) => {
  return (
    <>
      <Logo source={require("../../../assets/logo.jpeg")} />
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
    </>
  );
};
