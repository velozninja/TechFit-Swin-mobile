import { View } from "react-native";
import Form from "../../components/form";
import Title from "../../components/title";
import { useState } from "react";
import embreve from "../../utils/emBreve";
import authLoginApi from "../../services/api/authLoginApi";

export default function LoginScreen() {
  const [formData, setFormData] = useState({
    nome: "",
    senha: "",
    email: "",
    isPersonal: false,
    aceitaTermos: false,
    formulario: "Formulario de Login",
    Button: "Não tem uma conta? Criar uma conta",
    screen:"Register",
    buttontext:"Login"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async () => {
    if (isSubmitting) {
      return false;
    }

    setIsSubmitting(true);
    const success = await authLoginApi(
      formData.email,
      formData.senha,
      formData.nome,
      formData.isPersonal
    );
    setIsSubmitting(false);

    return success;
  };

  return (
    <View>
      <Title title="Bem vindo de volta ao TechFit-Swin" />
      <Form
        formulario={formData.formulario}
        nome={formData.nome}
        setNome={(value) => setFormData({ ...formData, nome: value })}
        senha={formData.senha}
        setSenha={(value) => setFormData({ ...formData, senha: value })}
        email={formData.email}
        setEmail={(value) => setFormData({ ...formData, email: value })}
        isPersonal={formData.isPersonal}
        setIsPersonal={(value) => setFormData({ ...formData, isPersonal: value })}
        aceitaTermos={formData.aceitaTermos}
        setAceitaTermos={(value) => setFormData({ ...formData, aceitaTermos: value })}
        RegisterAndLogin={formData.Button}
        Screen={formData.screen}
        func1={handleLogin}
        func2={embreve}
        textbutton={isSubmitting ? 'Logando...' : formData.buttontext}
        disabled={isSubmitting}
      />
    </View>
  );
}