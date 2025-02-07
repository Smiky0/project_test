import { defaultStyles } from "@/app/styles";
import { Stack } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function SongsScreenLayout() {
    return (
        <View style={defaultStyles.container}>
            <Stack>
                <Stack.Screen name="index" options={{ headerTitle: "Songs" }} />
            </Stack>
        </View>
    );
}
