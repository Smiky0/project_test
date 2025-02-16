import React from "react";
import { FlatList, FlatListProps, StyleSheet } from "react-native";
import library from "@/assets/data/library.json";
import { TrackListItem } from "./TrackListItem";
import { Track } from "react-native-track-player";

export type TrackListProps = Partial<FlatListProps<Track>> & {
    tracks: Track[];
};

export const TrackLists = ({ ...flatListProps }: TrackListProps) => {
    return (
        <FlatList
            style={styles.container}
            data={library}
            renderItem={({ item: track }) => (
                <TrackListItem
                    track={track}
                />
            )}
            {...flatListProps}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        paddingBottom: 140,
    },
});
