import { Link, Stack } from "expo-router";
import React from "react";
import { View, StyleSheet } from "react-native";
import { defaultStyles } from "./styles";

export default function NotFoundPage() {
    return (
        <>
            <Stack.Screen options={{ title: "Oops! Not Found" }} />
            <View style={defaultStyles.container}>
                <Link href={"/(tabs)/homepage"} style={styles.button}>
                    Go back to Home screen!
                </Link>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    button: {
        fontSize: 20,
        textDecorationLine: "underline",
        color: "#fff",
    },
});
