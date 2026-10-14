import {View, Text} from 'react-native';
import { styles } from './styles.js';

export default function Title({children}) {
    return(
       
        <Text style={styles.Text}>
            {children}

        </Text>
 
    )
}