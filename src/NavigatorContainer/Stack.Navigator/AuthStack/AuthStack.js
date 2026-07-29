import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function RegisterScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen
             name="Register" 
            component={RegisterScreen} />
            <Stack.Screen
             name="terms" 
            component={TermsScreen} />
        </Stack.Navigator>
    );
}