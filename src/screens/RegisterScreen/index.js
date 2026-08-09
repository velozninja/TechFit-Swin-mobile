import Form from "../../components/form";
import Title from "../../components/title";
import Styles from "./styles";
import { View, Alert } from 'react-native';
import React, { useState } from "react";
import AuthRegisterServiceApi from "../../services/authRegisterApi";
import { useNavigation } from "@react-navigation/native";

export default function RegisterScreen() {
    const navigation = useNavigation();
    
    const [formData, setFormData] = useState({
        nome: '',
        senha: '',
        email: '',
        isPersonal: false,
        aceitaTermos: false,
        formulario: "Formulario de cadastro",
        Button: "Já tem uma conta? Fazer login",
        screen: "Login",
        buttontext: "Cadastrar"
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleRegister = async () => {
        if (isSubmitting) {
            return false;
        }

        if (formData.nome.trim() === '' || formData.email.trim() === '' || formData.senha.trim() === '') {
            Alert.alert("Erro", "Preencha todos os campos");
            return false;
        }

        if (!formData.aceitaTermos) {
            Alert.alert("Erro", "Aceite os termos de serviço para continuar");
            return false;
        }
       
        setIsSubmitting(true);
        const success = await AuthRegisterServiceApi(
            formData.email,
            formData.senha,
            formData.nome,
            formData.isPersonal
        );
        setIsSubmitting(false);

        if (success) {
            navigation.navigate('Login');
        }

        return success;
    };

    return(
        <View>
            <Title title="Bem vindo ao TechFit-Swin" />
            <Form 
                formulario={formData.formulario}
                nome={formData.nome}
                setNome={(value) => setFormData({...formData, nome: value})}
                senha={formData.senha}
                setSenha={(value) => setFormData({...formData, senha: value})}
                email={formData.email}
                setEmail={(value) => setFormData({...formData, email: value})}
                isPersonal={formData.isPersonal}
                setIsPersonal={(value) => setFormData({...formData, isPersonal: value})}
                aceitaTermos={formData.aceitaTermos}
                setAceitaTermos={(value) => setFormData({...formData, aceitaTermos: value})}
                RegisterAndLogin={formData.Button}
                Screen={formData.screen}
                func1={handleRegister}
                textbutton={isSubmitting ? 'Cadastrando...' : formData.buttontext}
                disabled={isSubmitting}
            />
        </View>
    )
}