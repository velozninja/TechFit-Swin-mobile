import { ScrollView } from "react-native"


export default function ScrollViweBaseSheet({children}){
    return(
        <ScrollView style={{backgroundColor: "#4e86b8",
            flex: 1,}}>
                {children}
            </ScrollView>
    );
}