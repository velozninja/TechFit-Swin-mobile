import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "#eaf5ff",
    },

    headerContainer: {
        paddingTop: 70,
        paddingBottom: 28,
        alignItems: "center",
    },

    titleContainer: {
        backgroundColor: "#0f8cff",
        paddingVertical: 16,
        paddingHorizontal: 38,
        borderRadius: 28,
        shadowColor: "#0b5fc8",
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.22,
        shadowRadius: 18,
        elevation: 8,
    },

    title: {
        color: "#ffffff",
        fontSize: 28,
        fontWeight: "700",
        letterSpacing: 0.4,
    },

    contentCard: {
        backgroundColor: "#ffffff",
        width: "90%",
        alignSelf: "center",
        borderRadius: 28,
        paddingVertical: 18,
        paddingHorizontal: 16,
        shadowColor: "#8dbef7",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.18,
        shadowRadius: 18,
        elevation: 6,
    },

    sectionLabel: {
        color: "#1b3d74",
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 18,
        marginLeft: 8,
    },

    actionRow: {
        paddingHorizontal: 4,
        paddingBottom: 8,
        alignItems: "center",
    },

    actionButton: {
        width: 110,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 16,
        paddingVertical: 12,
    },

    iconCircle: {
        width: 82,
        height: 82,
        borderRadius: 41,
        backgroundColor: "#0f8cff",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#0f8cff",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.35,
        shadowRadius: 15,
        elevation: 6,
    },

    iconText: {
        color: "#ffffff",
        fontSize: 28,
        fontWeight: "800",
    },

    textAction: {
        color: "#1d4d88",
        fontSize: 12,
        fontWeight: "700",
        textAlign: "center",
        marginTop: 10,
        textTransform: "lowercase",
    },
});