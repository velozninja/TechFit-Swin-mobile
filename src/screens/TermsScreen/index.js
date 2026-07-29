
import {styles} from "./Styles";
import { View, Text } from 'react-native';



export default function TermsScreen() {
    return (
        <View style={styles.box}>
            <Text style={styles.TextTitle}>Termos e Condições de Serviço e Política de Privacidade do TechFit</Text>
            <Text style={styles.TextSubtitle}>Objetivo do TechFit-Swin:</Text>
            <Text style={styles.TextContent}>O TechFit-Swin é uma plataforma destinada a facilitar a comunicação e o gerenciamento de treinos entre personal trainers de natação e seus alunos.

O aplicativo atua exclusivamente como uma ferramenta de apoio à organização e ao acompanhamento dos treinos, não prestando serviços de treinamento, consultoria esportiva, atendimento médico ou qualquer outro serviço profissional.

O TechFit-Swin não garante a qualidade dos serviços prestados pelos personal trainers cadastrados, nem se responsabiliza pelas orientações, ações, condutas ou informações fornecidas pelos usuários da plataforma.

Além disso, o TechFit-Swin não realiza diagnósticos, não prescreve dietas, medicamentos ou tratamentos, não fornece avaliações clínicas e não substitui a orientação de profissionais devidamente habilitados. </Text>
        </View>
    );
}

