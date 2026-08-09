
import { Alert } from "react-native";
import { API_URL } from "@env";

export default async function AuthRegisterServiceApi(email, senha, nome, isPersonal) {
  if (!API_URL) {
    Alert.alert("Erro", "API_URL não configurada");
    return false;
  }

  const body = {
    name: nome,
    email: email,
    password: senha,
    personal: isPersonal
  };

  console.log("BODY REAL:", JSON.stringify(body));

  try {
    const res = await fetch(
      `${API_URL.replace(/\/+$/, "")}/v1/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }
    );

    console.log("STATUS:", res.status);

    const responseText = await res.text();
    console.log("RESPOSTA:", responseText);

    if (!res.ok) {
      Alert.alert("Erro", `Erro ao criar conta (${res.status})`);
      return false;
    }

    Alert.alert("Sucesso", "Conta criada com sucesso");
    return true;

  } catch (error) {
    console.log("ERRO FETCH:", error);
    Alert.alert("Erro", "Não foi possível conectar ao servidor");
    return false;
  }
}
