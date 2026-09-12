import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function AlunoHomeScreen() {
    const actions = [
        { label: "meus\ntreinos", icon: "▶" },
        { label: "agenda", icon: "□" },
        { label: "personal", icon: "person-outline", isVectorIcon: true }
    ];

    return (
        <ScrollView style={styles.mainView} showsVerticalScrollIndicator={false}>
            <View style={styles.headerContainer}>
                <View style={styles.greetingRow}>
                    <View>
                        <Text style={styles.eyebrow}>ÁREA DO ALUNO</Text>
                        <Text style={styles.title}>Olá, atleta</Text>
                    </View>

                </View>
                <Text style={styles.subtitle}>Pronto para dar mais uma braçada?</Text>
            </View>

            <View style={styles.contentCard}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionLabel}>Seu próximo treino</Text>
                    <Text style={styles.dateLabel}>HOJE</Text>
                </View>

            

                <Text style={styles.sectionLabel}>Ações rápidas</Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.actionRow}
                >
                    {actions.map((action) => (
                        <TouchableOpacity
                            key={action.label}
                            activeOpacity={0.85}
                            style={styles.actionButton}
                        >
                            <View style={styles.iconCircle}>
                                {action.isVectorIcon ? (
                                    <Ionicons name={action.icon} size={30} color="#ffffff" />
                                ) : (
                                    <Text style={styles.iconText}>{action.icon}</Text>
                                )}
                            </View>
                            <Text style={styles.textAction}>{action.label}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

 
        </ScrollView>
    );
}