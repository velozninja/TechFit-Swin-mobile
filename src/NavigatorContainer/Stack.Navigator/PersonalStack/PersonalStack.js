
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ConfigScreen from '../../../screens/configScreen/index.js';

import PersonalHomeScreen from '../../../screens/PersonalHomeScreen/personalHomeScreen.js';
import TermsScreen from '../../../screens/TermsScreen/index.js';

const Stack = createNativeStackNavigator();

export default function PersonalStack() {
    return (
        
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="HomePersonal" component={PersonalHomeScreen} />
                <Stack.Screen name='Config' component={ConfigScreen}/>
                <Stack.Screen name="terms" component={TermsScreen} />
            </Stack.Navigator>
        
    );
}