
import { Alert } from "react-native";
import { API_URL } from "@env";
import { saveToken } from "../auth/TokenService";


export default async function authLoginApi(email, senha, nome, isPersonal) {
    if (!API_URL) {
    Alert.alert("Erro", "API_URL não configurada");
    return false;
  }

  const body = {
    name: nome.trim(),
    email: email.trim(),
    password: senha.trim(),
    personal: isPersonal
  };

  console.log("BODY REAL:", JSON.stringify(body));

  try {
    const res = await fetch(
      `${API_URL}/v1/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }
    );
    
    


    const data = await res.json();
    
  
    if (!res.ok) {
      Alert.alert("Erro", `Erro ao cadastrar conta (${data.message})`);
      return false;
    }
    await saveToken(data.Token, data.ExpirationTime)
    

    Alert.alert("Sucesso", "Conta cadastrada com sucesso");

    return true;

  } catch (error) {
    console.log("ERRO REAL:", error);
    console.log("ERRO MESSAGE:", error?.message);
    console.log("ERRO STACK:", error?.stack);
    
 
    Alert.alert("Erro", "Não foi possível conectar ao servidor");
    return false;
  }
}

 
  
  

