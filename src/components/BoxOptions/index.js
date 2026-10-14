import { ScrollView } from "react-native";
import { style } from "./style";


export default function BoxOptions({children}){
    return(
        <ScrollView style={style.boxOptions} contentContainerStyle={style.content} horizontal showsHorizontalScrollIndicator={false}>
            {children}
        </ScrollView>
    );
}