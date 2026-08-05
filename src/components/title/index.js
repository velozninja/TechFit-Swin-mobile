import {View, Text} from 'react-native';
import { styles } from './styles.js';

export default function Title(props) {
    return(
        <View>
            <Text style={styles.Text}>{props.title}</Text>
        </View>
    )
}