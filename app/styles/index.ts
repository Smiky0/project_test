import { StyleSheet } from "react-native";
import { colors, fontSize } from "../constants/tokens";

export const defaultStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
        backgroundColor: colors.background,
        padding: 14,
        paddingTop: 50,
    },
    title: {
        color: colors.text,
        fontSize: fontSize.lg,
        padding: 10,
        paddingBottom: 12,
        fontWeight: "600",  
    },
    text: {
        fontSize: fontSize.base,
        color: colors.text,
    }
})

export default function(){};