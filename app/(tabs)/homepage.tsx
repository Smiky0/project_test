import { useNavigation } from "expo-router";
import { StyleSheet, Text } from "react-native";
import MusicGridScreen from "../components/music_grid";
import { useEffect } from "react";
import SongListScreen from "../components/song_list";
import { ScrollView } from "react-native-gesture-handler";

import { colors, fontSize } from "../constants/tokens";
import React from "react";

export default function HomeScreen() {
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);

    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <Text
                style={{
                    color: colors.text,
                    fontSize: fontSize.lg,
                    padding: 10,
                    paddingBottom: 12,
                    fontWeight: "600",
                }}
            >
                Trending
            </Text>
            <MusicGridScreen />
            <Text
                style={{
                    color: colors.text,
                    fontSize: fontSize.lg,
                    padding: 10,
                    paddingBottom: 12,
                    fontWeight: "600",
                }}
            >
                Suggested albums for you
            </Text>
            <SongListScreen />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 6,
        paddingBottom: 120,
    },
    button: {
        fontSize: 20,
        textDecorationLine: "underline",
        color: "#fff",
    },
});
