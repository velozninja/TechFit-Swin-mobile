import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from '../../../screens/RegisterScreen/index.js';
import TermsScreen from '../../../screens/TermsScreen/index.js';
import LoginScreen from '../../../screens/LoginScreen/index.js';
const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="terms" component={TermsScreen} />
                <Stack.Screen name='Login' component={LoginScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}