import { FlatList, StyleSheet, Text, View } from "react-native";
import MusicGridScreen from "../components/MusicGrid";
import SongListScreen from "../components/AlbumSongs";
import { colors } from "../constants/tokens";
import React from "react";
import { defaultStyles } from "../styles";

export default function HomeScreen() {
    const sections = [
        { id: "1", title: "Trending", component: <MusicGridScreen /> },
        {
            id: "2",
            title: "Suggested for you",
            component: <SongListScreen />,
        },
    ];

    return (
        <FlatList
            data={sections}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={{ padding: 10 }}>
                    <Text style={defaultStyles.title}>{item.title}</Text>
                    <View>{item.component}</View>
                </View>
            )}
            contentContainerStyle={styles.container}
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={true} // Allows inner FlatLists to scroll properly
        />
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        padding: 4,
        paddingTop: 50,
        paddingBottom: 140,
    },
    button: {
        fontSize: 20,
        textDecorationLine: "underline",
        color: "#fff",
    },
});
