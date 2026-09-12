import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "#eaf5ff",
    },
    headerContainer: {
        paddingTop: 64,
        paddingHorizontal: 24,
        paddingBottom: 24,
    },
    greetingRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    eyebrow: {
        color: "#4783b9",
        fontSize: 11,
        fontWeight: "800",
        letterSpacing: 1.4,
        marginBottom: 6,
    },
    title: {
        color: "#173d68",
        fontSize: 30,
        fontWeight: "800",
    },
    subtitle: {
        color: "#5d7b98",
        fontSize: 14,
        marginTop: 8,
    },


    contentCard: {
        backgroundColor: "#ffffff",
        width: "90%",
        alignSelf: "center",
        borderRadius: 26,
        paddingVertical: 20,
        paddingHorizontal: 16,
        shadowColor: "#8dbef7",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.18,
        shadowRadius: 18,
        elevation: 6,
    },
    sectionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 14,
        marginHorizontal: 8,
    },
    sectionLabel: {
        color: "#1b3d74",
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 16,
        marginLeft: 8,
    },
    dateLabel: {
        color: "#0f8cff",
        fontSize: 11,
        fontWeight: "800",
        letterSpacing: 1,
    },
    actionRow: {
        paddingHorizontal: 4,
        paddingBottom: 4,
        alignItems: "center",
    },
    actionButton: {
        width: 104,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 14,
        paddingVertical: 4,
    },
    iconCircle: {
        width: 68,
        height: 68,
        borderRadius: 34,
        backgroundColor: "#0f8cff",
        alignItems: "center",
        justifyContent: "center",
    },
    iconText: {
        color: "#ffffff",
        fontSize: 25,
        fontWeight: "800",
    },
    textAction: {
        color: "#1d4d88",
        fontSize: 12,
        lineHeight: 16,
        fontWeight: "700",
        textAlign: "center",
        marginTop: 9,
    },
});