import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function ConfigButton({ Title, func }) {
  return (
    <TouchableOpacity style={styles.button} onPress={func}>
      <View>
        <Text>{Title}</Text>
      </View>
    </TouchableOpacity>
  );
}