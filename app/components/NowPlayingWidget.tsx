import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { colors, fontSize } from "../constants/tokens";

const songs = [
    {
        id: "1",
        title: "Blinding Lights ",
        artist: "The Weeknd",
        image: "https://i.scdn.co/image/ab67616d0000b27382ea2e9e1858aa012c57cd45",
    },
    {
        id: "2",
        title: "Save Your Tears",
        artist: "The Weeknd",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS36r9DdyEN-M-pXMs3JuWvd64YrcR4WrzwQQ&s",
    },
];

const NowPlayingWidget = () => {
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const playNext = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    };

    const currentSong = songs[currentSongIndex];

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: currentSong.image }}
                style={styles.albumArt}
            />
            <View style={styles.textContainer}>
                <Text style={styles.songTitle}>{currentSong.title}</Text>
                <Text style={styles.songArtist}>{currentSong.artist}</Text>
            </View>
            <View style={styles.controls}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.icon}
                    onPress={playNext}
                >
                    <FontAwesome6 name="forward-step" size={30} color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.icon}
                    onPress={togglePlayPause}
                >
                    <FontAwesome6
                        name={isPlaying ? "pause" : "play"}
                        size={30}
                        color="white"
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 65,
        left: 10,
        right: 10,
        flexDirection: "row",
        backgroundColor: colors.gray,
        padding: 6,
        margin: 10,
        borderRadius: 20,
        alignItems: "center",
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 5,
    },
    albumArt: {
        width: 55,
        height: 55,
        borderRadius: 15,
    },
    icon: {
        height: 30,
        width: 30,
        alignItems: "center",
        textAlign: "center",
    },
    textContainer: {
        flex: 1,
        marginLeft: 12,
    },
    songTitle: {
        color: colors.text,
        fontSize: fontSize.sm,
        fontWeight: "bold",
    },
    songArtist: {
        color: colors.textMuted,
        fontSize: fontSize.xs,
    },
    controls: {
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
    },
});

export default NowPlayingWidget;
