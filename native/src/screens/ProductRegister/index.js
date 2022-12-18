import { useState } from "react";
import { MainContainer } from "../../components/MainContainer/styles.js";
import { Header } from "../../components/Header/index.js";
import { EditInputUser } from "../../components/EditInputUser/index.js";
import { MainButton, ButtonText } from "../../components/MainButton/styles.js";
import { ImgButton } from "../../components/ImgButton/index.js";
import { Api } from "../../services/index.js";
import { Picker } from '@react-native-picker/picker';
import { Footer } from "../../components/Footer/index.js";

export const ProductRegister = ({ navigation }) => {
    const [nome, setNome] = useState("");
    const [foto, setFoto] = useState("https://i.imgur.com/khLyPgQ.png");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState("");
    const [qtdEstoque, setQTDEstoque] = useState("");

    const addPost = () => {
        const data = {
            descricao: descricao,
            foto: foto,
            nome: nome,
            preco: preco,
            qtdEstoque: qtdEstoque,
        };

        Api.post("/produto", data)
            .then((res) => {
                alert("Produto cadastrado com sucesso!");
                navigation.goBack();
            });
    };

    function goBack() {
        navigation.goBack();
    }

    return (
        <MainContainer>
            <Header title={"Cadastrar Produto"} goBack={goBack} iconName={"arrow-back"} />
            <ImgButton sourceImage={foto} />
            <EditInputUser
                placeHolder={"Informe o Nome"}
                onChangeText={(text) => setNome(text)}
                autoCapitalize={"words"}
            />
            <EditInputUser
                placeHolder={"Informe o endereço da foto"}
                onChangeText={(text) => setFoto(text)}
                autoCapitalize={"words"}
            />
            <EditInputUser
                placeHolder={"Informe a Descrição"}
                onChangeText={(text) => setDescricao(text)}
                autoCapitalize={"words"}
            />
            <Picker style={{
                width: 187,
                height: 33,
                marginTop: 40,
                marginBottom: 5,
                borderRadius: 5,
                borderColor: 'transparent',
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0px 4px 4px #1E90FF",
                backgroundColor: '#87CEFA',
                color: '#fff',
            }}
            r>
                
            </Picker>

            <EditInputUser
                placeHolder={"Informe o preço"}
                onChangeText={(text) => setPreco(text)}
                autoCapitalize={"words"}
            />
            <EditInputUser
                placeHolder={"Informe o estoque"}
                onChangeText={(text) => setQTDEstoque(text)}
                autoCapitalize={"words"}
            />

            <MainButton onPress={() => addPost()}>
                <ButtonText>
                    Cadastrar
                </ButtonText>
            </MainButton>
            <Footer />
        </MainContainer>
    )
};