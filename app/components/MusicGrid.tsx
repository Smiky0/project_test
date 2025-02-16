import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
} from "react-native";
import { colors, fontSize } from "../constants/tokens";

interface MusicData {
    id: string;
    title: string;
    image: string;
}

const API_URL = "https://api.jsonbin.io/v3/qs/67b0a7d1acd3cb34a8e339f0";

const MusicGridScreen = () => {
    const [musicData, setMusicData] = useState<MusicData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMusicData = async () => {
            try {
                const response = await fetch(API_URL);
                const json = await response.json();
                setMusicData(json.record.songs); // Access 'songs' array inside 'record'
            } catch (error) {
                console.error("Error fetching music data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMusicData();
    }, []);

    if (loading) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color={colors.primary} />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                scrollEnabled={false}
                data={musicData}
                numColumns={2} // Creates a 2-column grid
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card}>
                        <Image
                            source={{ uri: item.image }}
                            style={styles.image}
                        />
                        <Text style={styles.title}>{item.title}</Text>
                    </TouchableOpacity>
                )}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        padding: 0,
        marginTop: 0,
        paddingTop: 0,
    },
    card: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: colors.minimumTrackTintColor,
        margin: 4,
        borderRadius: 10,
        padding: 2,
        alignItems: "center",
    },
    image: {
        width: "40%",
        height: 56,
        borderRadius: 10,
    },
    title: {
        paddingHorizontal: 8,
        color: "#fff",
        fontSize: fontSize.sm,
        fontWeight: "600",
        textAlign: "left",
        flexWrap: "wrap",
        flexShrink: 1,
    },
    loaderContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default MusicGridScreen;
