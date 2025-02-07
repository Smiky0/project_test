import { defaultStyles } from "@/app/styles";
import React from "react";
import { Text, View } from "react-native";

export default function SongSceen() {
    return (
        <View style={defaultStyles.container}>
            <Text style={defaultStyles.text}>Songs Screen</Text>
        </View>
    );
}
