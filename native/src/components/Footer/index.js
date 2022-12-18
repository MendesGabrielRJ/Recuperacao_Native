import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import colors from "../../themes/colors.js";
import {Container} from "./styles.js";

export const Footer = () => {

    const navigation = useNavigation();

    function openProduct() {
        navigation.navigate("Product");
    }

    function openProductRegister() {
        navigation.navigate("ProductRegister");
    }

    return (
        <Container>
            <TouchableOpacity onPress={openProduct}>
            <MaterialCommunityIcons
          name="shopping"
          size={30}
          color={colors.footerIcons} />
            </TouchableOpacity>
            <TouchableOpacity onPress={openProductRegister}>
            <MaterialCommunityIcons
          name="view-grid-plus-outline"
          size={30}
          color={colors.footerIcons} />
            </TouchableOpacity>
        </Container>
    )
}