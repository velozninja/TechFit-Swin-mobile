import Form from "../../components/form";
import Title from "../../components/title";
import Styles from "./styles";
import { View, Text } from 'react-native';
import React, { useState } from "react";


export default function LoginScreen() {
    const [formData, setFormData] = useState({
        nome: '',
        senha: '',
        email: '',
        isPersonal: false,
        aceitaTermos: false,
    }); 
    return(
        <View >
           
            <Title />

            <Form 
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
            />
        </View>
    )
}