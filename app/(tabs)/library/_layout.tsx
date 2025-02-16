import { defaultStyles } from "@/app/styles";
import { Stack } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function LibraryScreenLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
    );
}
