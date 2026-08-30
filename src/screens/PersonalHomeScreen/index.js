import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function PersonalHomeScreen() {
    const actions = [
        { label: "cadastrar\naluno", icon: "🏊" },
        { label: "alunos", icon: "✓" },
        { label: "treinos", icon: "🏊" },
    ];

    return (
        <ScrollView style={styles.mainView} showsVerticalScrollIndicator={false}>
            <View style={styles.headerContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Olá Chefe</Text>
                </View>
            </View>

            <View style={styles.contentCard}>
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
                                <Text style={styles.iconText}>{action.icon}</Text>
                            </View>
                            <Text style={styles.textAction}>{action.label}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </ScrollView>
    );
}