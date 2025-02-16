import { Stack } from "expo-router";
import React from "react";

export default function SongsScreenLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
    );
}
