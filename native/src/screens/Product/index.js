import { MainContainer } from "../../components/MainContainer/styles.js";
import { Header } from "../../components/Header/index.js";
import { useNavigation } from "@react-navigation/native";
import { PlusButton } from "../../components/PlusButton/index.js";
import { Api } from "../../services";
import { FlatList } from "react-native";
import { ItemProduct } from "../../components/ItemProduct/index.js";
import { useState, useEffect } from "react";
import { Footer } from "../../components/Footer/index.js";

export const Product = () => {
  const navigation = useNavigation();
  const [product, setProduct] = useState([]);

  const renderItem = ({ item }) => (
    <ItemProduct  idProduct={item.id} nomeProduct={item.nome} fotoProduct={item.foto} descricaoProduct={item.descricao} qtdEstoqueProduct={item.qtdEstoque} precoProduct={item.preco} categoriaProduct={item.categoria} identificador={item.id}  />
  );
  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const res = await Api.get("/produto");
    const { data } = res;
    setProduct(data);
  }
  

  function goBack() {
    navigation.goBack();
  };

  return (
    <MainContainer>
      <Header title={"Produtos"} iconName={"arrow-back"} goBack={goBack} />
      <PlusButton onPress={() => navigation.navigate("ProductRegister")} />
      <FlatList
        data={product}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      <Footer />
    </MainContainer>
  );
};