import { StyleSheet } from "react-native";
import { colors, fontSize } from "../constants/tokens";

export const defaultStyles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        padding: 10,
    },
    text: {
        fontSize: fontSize.base,
        color: colors.text,
    }
})

export default defaultStyles;