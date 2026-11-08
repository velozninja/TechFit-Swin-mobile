import { Button } from "react-native";
import ScrollViweBaseSheet from "../../components/ScrollViewBaseSheet";
import { Styles } from "./Styles";
import ConfigButton from "../../components/ConfigButton";

import { useNavigation } from "@react-navigation/native";

export default function ConfigScreen(){
    const navigation = useNavigation();

    return <ScrollViweBaseSheet>
        
        <ConfigButton Title="Termos de serviço" func={() => navigation.navigate('terms')}></ConfigButton>
    </ScrollViweBaseSheet>
}