import React, {useState} from 'react';
import { View, Text, TextInput, Keyboard, Pressable, TouchableOpacity} from 'react-native';
import { styles} from './styles';
import { useNavigation } from '@react-navigation/native';
import Checkbox from "../checkbox";



export default function Form(props) {
  const navigation = useNavigation();
  

  return (
    <Pressable style={styles.box} onPress={Keyboard.dismiss}>
      <Text style={styles.textTop}>{props.formulario}</Text>
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
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.buttonRowItem} onPress={() => navigation.navigate('terms')}>
          <Text style={styles.buttonText}>Termos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRowItem} onPress={() => navigation.navigate(props.Screen)}>
          <Text style={styles.buttonText}>{props.RegisterAndLogin}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.button, props.disabled && styles.buttonDisabled]}
        onPress={async () => {
          if (props.disabled) {
            return;
          }

          let success = false;

          try {
            if (typeof props.func1 === 'function') {
              const result = props.func1();
              success = result instanceof Promise ? await result : result;
              success = success === true;
            }
          } catch (Err) {
            alert('Não foi possível realizar a ação');
            success = false;
          }

          if (success) {
            try {
              if (typeof props.func2 === 'function') {
                await props.func2();
              }
            } catch (Err) {
              alert('Não foi possível concluir a ação');
            }
          }
        }}
        disabled={props.disabled}
      >
        <Text style={styles.buttonText}>{props.textbutton}</Text>
      </TouchableOpacity>

    </Pressable>
  );
}