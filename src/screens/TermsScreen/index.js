import {styles} from "./Styles";
import { View, Text, ScrollView } from 'react-native';

export default function TermsScreen() {
    return (
        <ScrollView>
            <View style={styles.box}>
                <Text style={styles.TextTitle}>Termos e Condições de Serviço e Política de Privacidade do TechFit-Swin</Text>
                <Text style={styles.TextSubtitle}>Aceitação dos Termos</Text>
                <Text style={styles.TextContent}>Ao criar um perfil no aplicativo TechFit-Swin, você concorda com os termos e condições estabelecidos neste documento. Caso não concorde com algum dos termos, solicitamos que não utilize a plataforma.</Text>
                <Text style={styles.TextSubtitle}>Objetivo do TechFit-Swin:</Text>
                <Text style={styles.TextContent}>{`O TechFit-Swin é uma plataforma destinada a facilitar a comunicação e o gerenciamento de treinos entre personal trainers de natação e seus alunos.

O aplicativo atua exclusivamente como uma ferramenta de apoio à organização e ao acompanhamento dos treinos, não prestando serviços de treinamento, consultoria esportiva, atendimento médico ou qualquer outro serviço profissional.

O TechFit-Swin não garante a qualidade dos serviços prestados pelos personal trainers cadastrados, nem se responsabiliza pelas orientações, ações, condutas ou informações fornecidas pelos usuários da plataforma.

Além disso, o TechFit-Swin não realiza diagnósticos, não prescreve dietas, medicamentos ou tratamentos, não fornece avaliações clínicas e não substitui a orientação de profissionais devidamente habilitados.`}</Text>
                <Text style={styles.TextSubtitle}>Cadastro de Usuário:</Text>
                <Text style={styles.TextContent}>{`Para utilizar determinadas funcionalidades, o usuário deverá fornecer informações verdadeiras, completas e atualizadas.

O usuário é responsável por manter a confidencialidade de sua senha e por todas as atividades realizadas em sua conta.`}</Text>
                <Text style={styles.TextSubtitle}>Uso Permitido</Text>
                <Text style={styles.TextContent}>{`O usuário concorda em:

• Utilizar o aplicativo de forma legal e ética;
• Não tentar invadir, modificar ou comprometer a segurança do sistema;
• Não utilizar o aplicativo para fins ilícitos;
• Não tentar acessar a conta de outros usuarios;
• Não colocar informação falsa no cadastro.`}</Text>
                <Text style={styles.TextSubtitle}>Conteúdo dos Usuários</Text>
                <Text style={styles.TextContent}>{`As informações cadastradas por alunos e profissionais permanecem sob responsabilidade de quem as inseriu.

O TechFit-Swin poderá armazenar esses dados para possibilitar o funcionamento do serviço.`}</Text>
                <Text style={styles.TextSubtitle}>Privacidade</Text>
                <Text style={styles.TextContent}>{`O tratamento dos dados pessoais é realizado conforme a Política de Privacidade do TechFit-Swin e em conformidade com a Lei Geral de Proteção de Dados (LGPD). Só serão coletados os dados de email, senha, nome de usuario.E Para possibilitar o funcionamento do aplicativo, os treinos cadastrados são associados à conta do usuário correspondente. Essa associação é utilizada exclusivamente para identificar o proprietário dos treinos e permitir seu gerenciamento pelo aluno e pelo personal trainer autorizado.  `}</Text>
                <Text style={styles.TextSubtitle}>{`Compartilhamento de dados`}</Text>
                <Text style={styles.TextContent}>{`O endereço de e-mail do aluno poderá ser compartilhado exclusivamente com o personal trainer responsável pelo seu acompanhamento, para permitir sua identificação e o gerenciamento dos treinos.

Nenhum outro dado pessoal será compartilhado com outros usuários, exceto quando exigido por lei ou mediante autorização do titular`}</Text>
                <Text style={styles.TextSubtitle}>{`Segurança dos Dados`}</Text>
                <Text style={styles.TextContent}>{`O TechFit-Swin adota medidas técnicas e administrativas para proteger os dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição.

Entretanto, nenhum sistema é totalmente imune a falhas de segurança.`}</Text>
                <Text style={styles.TextSubtitle}>{`Direitos do Usuário (LGPD)`}</Text>
                <Text style={styles.TextContent}>{`Nos termos da LGPD, o usuário poderá solicitar:
• confirmação da existência de tratamento de seus dados;
• acesso aos seus dados pessoais;
• correção de dados incorretos ou desatualizados;
• exclusão dos dados, quando aplicável;
• informações sobre o compartilhamento de seus dados.`}</Text>
                <Text style={styles.TextSubtitle}>{`Disponibilidade do Serviço`}</Text>
                <Text style={styles.TextContent}>{`O TechFit-Swin poderá ficar temporariamente indisponível devido a manutenções, atualizações ou falhas técnicas, sem que isso gere direito à indenização.`}</Text>
                <Text style={styles.TextSubtitle}>{`Disponibilidade do Serviço`}</Text>
                <Text style={styles.TextContent}>{`O TechFit-Swin poderá ficar temporariamente indisponível devido a manutenções, atualizações ou falhas técnicas, sem que isso gere direito à indenização.`}</Text>
                <Text style={styles.TextSubtitle}>{`Suspensão de Conta`}</Text>
                <Text style={styles.TextContent}>{`O TechFit-Swin poderá suspender ou encerrar contas que violem estes Termos de Serviço ou utilizem a plataforma de maneira fraudulenta ou ilegal.`}</Text>
                <Text style={styles.TextSubtitle}>{`Alteração dos Termos`}</Text>
                <Text style={styles.TextContent}>{`Estes Termos poderão ser alterados a qualquer momento para adequação à legislação ou inclusão de novas funcionalidades.

Sempre que houver alterações relevantes, os usuários serão informados pelo aplicativo.`}</Text>
                <Text style={styles.TextSubtitle}>{`Contato`}</Text> 
                <Text style={styles.TextContent}>{`Em caso de dúvidas sobre estes Termos ou sobre a Política de Privacidade, entre em contato pelo e-mail:
Em breve`}</Text>
            </View>
                
        </ScrollView>
    );
}
