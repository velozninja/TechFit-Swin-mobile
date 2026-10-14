import { View, Text } from "react-native";
import { styles } from "./styles";
export default function BoxTitle({ children }) {
    return (
        <View style={styles.boxContent}>
          
            {children}
        </View>
    );
}