import { colors } from "@/app/constants/tokens";
import { defaultStyles } from "@/app/styles";
import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function SongSceen() {
    return (
        <View style={styles.container}>
            <Text style={defaultStyles.title}>Library</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 14,
        paddingTop: 60,
        // paddingBottom: 140,
    },
});
