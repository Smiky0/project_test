import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const NowPlayingWidget = () => {
    const [isPlaying, setIsPlaying] = useState(true);

    const song = {
        title: "Blinding Lights",
        artist: "The Weeknd",
        albumArt: "https://via.placeholder.com/100", // Replace with actual album art
    };

    return (
        <View style={styles.container}>
            {/* Album Art */}
            <Image source={{ uri: song.albumArt }} style={styles.albumArt} />

            {/* Song Details */}
            <View style={styles.songInfo}>
                <Text style={styles.songTitle} numberOfLines={1}>
                    {song.title}
                </Text>
                <Text style={styles.songArtist} numberOfLines={1}>
                    {song.artist}
                </Text>
            </View>

            {/* Music Controls */}
            <View style={styles.controls}>
                <TouchableOpacity>
                    <FontAwesome name="step-backward" size={22} color="white" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setIsPlaying(!isPlaying)}>
                    <FontAwesome
                        name={isPlaying ? "pause" : "play"}
                        size={28}
                        color="white"
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <FontAwesome name="step-forward" size={22} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: "8%", // 🔥 Position it exactly above the main navbar
        left: 20,
        right: 20,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#1DB954", // Spotify Green
        padding: 10,
        borderRadius: 15,
        height: 60, // Adjust to fit above navbar
    },
    albumArt: {
        width: 50,
        height: 50,
        borderRadius: 5,
    },
    songInfo: {
        flex: 1,
        marginLeft: 10,
    },
    songTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
    },
    songArtist: {
        fontSize: 14,
        color: "#ddd",
    },
    controls: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15, // Space between controls
    },
});

export default NowPlayingWidget;
