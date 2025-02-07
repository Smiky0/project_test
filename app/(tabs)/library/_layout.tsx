import { defaultStyles } from "@/app/styles";
import { Stack } from "expo-router";
import { View } from "react-native";

export default function LibraryScreenLayout() {
    return (
        <View style={defaultStyles.container}>
            <Stack>
                <Stack.Screen
                    name="index"
                    options={{ headerTitle: "Library" }}
                />
            </Stack>
        </View>
    );
}
