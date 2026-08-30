import { useContext } from "react";
import { AuthContext } from "../services/auth/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "../NavigatorContainer/Stack.Navigator/AuthStack/AuthStack";
import EmbreveScreen from "../screens/embreveScreen";
export default function AppNavigator(){
    const { loading, user } = useContext(AuthContext);
    const token = user?.token;

   if (loading) {
    return null;
   }
   return(
    <NavigationContainer>
        {token ? (
            <EmbreveScreen></EmbreveScreen>
            

        ): (
            <AuthStack></AuthStack>
        )}
    </NavigationContainer>
   )


}