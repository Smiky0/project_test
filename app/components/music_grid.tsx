import React from "react";
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { colors, fontSize } from "../constants/tokens";

const musicData = [
    {
        id: "1",
        title: "Top Hits",
        image: "https://plus.unsplash.com/premium_photo-1689620817526-4963bfc2bc87?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: "2",
        title: "Chill Vibes",
        image: "https://plus.unsplash.com/premium_photo-1689620817526-4963bfc2bc87?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: "3",
        title: "Workout",
        image: "https://plus.unsplash.com/premium_photo-1689620817526-4963bfc2bc87?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: "4",
        title: "Jazz Classics",
        image: "https://plus.unsplash.com/premium_photo-1689620817526-4963bfc2bc87?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: "5",
        title: "Lo-Fi Beats",
        image: "https://plus.unsplash.com/premium_photo-1689620817526-4963bfc2bc87?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: "6",
        title: "Hip Hop",
        image: "https://plus.unsplash.com/premium_photo-1689620817526-4963bfc2bc87?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

const MusicGridScreen = () => {
    return (
        <View style={styles.container}>
            <FlatList
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
        padding: 10,
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
        paddingHorizontal: 10,
        color: "#fff",
        fontSize: fontSize.sm,
        fontWeight: "600",
        textAlign: "left",
    },
});

export default MusicGridScreen;
