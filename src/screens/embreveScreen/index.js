import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Pressable, SafeAreaView, Text, View } from 'react-native';
import { styles } from './styles';

export default function EmbreveScreen() {
	const navigation = useNavigation();

	const handleGoBack = () => {
		if (navigation.canGoBack()) {
			navigation.goBack();
		}
	};

	return (
		<SafeAreaView style={styles.safeArea}>
			<StatusBar style="light" />
			<View style={styles.backgroundShapeTop} />
			<View style={styles.backgroundShapeBottom} />

			<View style={styles.content}>
				<View style={styles.brandMark}>
					<View style={styles.brandMarkLine} />
					<View style={styles.brandMarkLineShort} />
					<View style={styles.brandMarkLine} />
				</View>

				<Text style={styles.eyebrow}>TECHFIT-SWIN</Text>
				<Text style={styles.title}>Algo novo esta chegando</Text>
				<Text style={styles.description}>
					Estamos preparando uma experiencia ainda melhor para acompanhar
					sua evolucao dentro e fora da piscina.
				</Text>

				<View style={styles.progressArea}>
					<View style={styles.progressHeader}>
						<Text style={styles.progressLabel}>EM DESENVOLVIMENTO</Text>
						<Text style={styles.progressValue}>75%</Text>
					</View>
					<View style={styles.progressTrack}>
						<View style={styles.progressBar} />
					</View>
				</View>

				<Pressable
					accessibilityRole="button"
					accessibilityLabel="Voltar para a tela anterior"
					onPress={handleGoBack}
					style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
				>
					<Text style={styles.buttonText}>Voltar</Text>
				</Pressable>
				<Text style={styles.footerText}>Seu proximo treino merece essa espera.</Text>
			</View>
		</SafeAreaView>
	);
}
