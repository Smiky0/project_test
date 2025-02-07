import React from "react";
import {
    View,
    Text,
    FlatList,
    ImageBackground,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // For fade effect
import { FontAwesome6 } from "@expo/vector-icons";
import { colors } from "../constants/tokens";

const album = {
    title: "Chill Vibes",
    image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
};

const songs = [
    { id: "1", title: "Sunset Dreams", artist: "John Doe", duration: "3:45" },
    { id: "2", title: "Ocean Breeze", artist: "Jane Smith", duration: "4:12" },
    { id: "3", title: "Mellow Beats", artist: "DJ Chill", duration: "5:05" },
    {
        id: "4",
        title: "Summer Nights",
        artist: "The Weekend Vibes",
        duration: "3:50",
    },
    { id: "5", title: "Deep Relax", artist: "Lofi Guru", duration: "4:30" },
];

const SongListScreen = () => {
    return (
        <View style={styles.container}>
            {/* Background Image with Fading Effect */}
            <ImageBackground
                source={{ uri: album.image }}
                style={styles.backgroundImage}
            >
                <LinearGradient
                    colors={["transparent", "#121212"]} // Fade from transparent to dark
                    style={styles.gradientOverlay}
                />

                {/* Buttons & Album Title on Top */}
                <View style={styles.overlayContent}>
                    <Text style={styles.albumTitle}>{album.title}</Text>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={styles.button}>
                            <FontAwesome6 name="shuffle" size={24} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <FontAwesome6 name="play" size={24} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>

            {/* Song List */}
            <FlatList
                data={songs}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.songItem}>
                        <View>
                            <Text style={styles.songTitle}>{item.title}</Text>
                            <Text style={styles.songArtist}>{item.artist}</Text>
                        </View>
                        <Text style={styles.songDuration}>{item.duration}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.minimumTrackTintColor,
        borderRadius: 15,
        padding: 8,
        margin: 10,
        marginTop: 0,
    },
    backgroundImage: {
        width: "100%",
        height: 150,
        justifyContent: "flex-end",
        borderRadius: 15,
        overflow: "hidden",
    },
    gradientOverlay: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 150,
    },
    overlayContent: {
        alignItems: "center",
        padding: 20,
    },
    albumTitle: {
        fontSize: 22,
        fontWeight: "600",
        color: "#fff",
    },
    buttonsContainer: {
        flexDirection: "row",
        marginTop: 10,
    },
    button: {
        backgroundColor: colors.primary,
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 50,
        marginHorizontal: 10,
        color: "black",
    },
    songItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#333",
    },
    songTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
    },
    songArtist: {
        fontSize: 14,
        color: "#aaa",
    },
    songDuration: {
        fontSize: 14,
        color: "#fff",
    },
});

export default SongListScreen;
