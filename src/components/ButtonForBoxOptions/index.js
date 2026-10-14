import { TouchableOpacity, Text} from "react-native";
import {Ionicons} from "@expo/vector-icons"
import { styles } from "./styles"; 
export default function ButtonForBoxOptions({icon, text, func}){
    return(
    <TouchableOpacity 
        onPress={func}
        style={styles.button}>
        <Ionicons name={icon} size={15}>
            
      
        </Ionicons>
        <Text style={styles.text}>
            {text}
        </Text>
    </TouchableOpacity>

    );
}