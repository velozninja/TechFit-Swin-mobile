import React, {useState} from 'react';
import { View, Text, TextInput, Keyboard, Pressable, TouchableOpacity} from 'react-native';
import { styles} from './styles';
import Checkbox from "../checkbox";



export default function Form(props) {
  

  return (
    <Pressable style={styles.box} onPress={Keyboard.dismiss}>
      <Text style={styles.textTop}>Formulário de Cadastro</Text>
      <Text style={styles.text}>Nome</Text>
      <TextInput
        placeholder="coloque seu nome de usuario"
        placeholderTextColor="#000000"
        value={props.nome}
        onChangeText={props.setNome}
        style={styles.input}
      />
            <Text style={styles.text}>Senha</Text>
      <TextInput
        placeholder="coloque sua senha"
        placeholderTextColor="#000000"
        value={props.senha}
        onChangeText={props.setSenha}
        style={styles.input}
      />
            <Text style={styles.text}>Email</Text>
      <TextInput
        placeholder="coloque seu email"
        placeholderTextColor="#000000"
        value={props.email}
        onChangeText={props.setEmail}
        style={styles.input}
      />
      <Text style={styles.text}>Você é personal?</Text>
      <Checkbox isinfo={props.isPersonal} Setinfo={props.setIsPersonal} />

      <Text style={styles.text}>Aceita os termos de serviço?</Text>
      <Checkbox isinfo={props.aceitaTermos} Setinfo={props.setAceitaTermos} />
      <TouchableOpacity style={styles.button} onPress={() => console.log('Form submitted')}>
        <Text style={styles.buttonText}>Termos de serviço e Política de Privacidade</Text>
      </TouchableOpacity>

    </Pressable>
  );
}