import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create(
    {
        text:{
            color: "#000000",
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'center',
        },
        input: {
          borderWidth: 1,
          borderColor: "#000",
          borderRadius: 10,
          marginHorizontal: 20,
          marginBottom: 10,
          padding: 10,
          width: "90%",
          fontSize: 16,
          color: "#000", 
        },

        box:{
            width: "90%",
            backgroundColor: "#c8e6ff",
            marginTop: 0,
            marginHorizontal: 20,
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            padding: 30,
            alignItems: 'center',
            alignContent: 'center',
        },

        textTop:{
            color: "#000000",
            fontSize: 25,
            fontWeight: 'bold',
            textAlign: 'center',
            AlignItems: 'center',
            marginBottom: 20,
        },
        buttonRow:{
            width: "90%",
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            alignSelf: 'center',
        },
        buttonRowItem:{
            width: "48%",
            backgroundColor: "#2196F3",
            borderRadius: 10,
            paddingVertical: 10,
            justifyContent: 'center',
            alignItems: 'center',
        },
        button:{
            width: "95%",
            alignSelf: 'center',
            marginTop: 20,
            backgroundColor: "#2196F3",
            borderRadius: 12,
            paddingVertical: 14,
            paddingHorizontal: 12,
            minHeight: 50,
            justifyContent: 'center',
            alignItems: 'center',
        },
     

        buttonText:{
            color: "#fff",
            fontSize: 11,
            fontWeight: 'bold',
            textAlign: 'center',
        }

    }
);