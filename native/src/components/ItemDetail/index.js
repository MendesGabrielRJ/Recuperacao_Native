import {
  Card,
  Name,
  Photo,
  TextContainer
} from "./styles";

export const ItemDetail = ({
  name,
  photo,
  id,
  description,
  price,
  qtyStorage,
}) => {
  return (
    <Card>
      <Photo source={{ uri: photo }} />
      <TextContainer>
        <Name>Nome: {name}</Name>
        <Name>ID: {id}</Name>
        <Name>Descrição: {description}</Name>
        <Name>Preço: R$ {price}</Name>
        <Name>Em estoque: {qtyStorage}</Name>
      </TextContainer>
    </Card>
  );
};