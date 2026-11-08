
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ConfigScreen from '../../../screens/configScreen/index.js';
import AlunoHomeScreen from '../../../screens/AlunoHomeScreen/index.js';

import TermsScreen from '../../../screens/TermsScreen/index.js';
const Stack = createNativeStackNavigator();

export default function AlunoStack() {
    return (
        
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="HomeAluno" component={AlunoHomeScreen} />
                <Stack.Screen name='Config' component={ConfigScreen}/>
                <Stack.Screen name="terms" component={TermsScreen} />

            </Stack.Navigator>
        
    );
}