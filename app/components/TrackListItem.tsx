import React from "react";
import {
    Image,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from "react-native";
import { unknownTrackImageUri } from "../constants/images";
import { colors, fontSize } from "../constants/tokens";
import { defaultStyles } from "../styles";
import { Track } from "react-native-track-player";

export type TrackListItemProps = {
    track: Track;
};

export const TrackListItem = ({ track }: TrackListItemProps) => {
    const isActiveTrack = false;
    return (
        <TouchableHighlight>
            <View style={styles.trackItemContainer}>
                <View>
                    <Image
                        source={{
                            uri: track.artwork ?? unknownTrackImageUri,
                        }}
                        style={{
                            ...styles.trackArtworkImage,
                            opacity: isActiveTrack ? 0.6 : 1,
                        }}
                    />
                </View>
                <View style={{ width: "100%" }}>
                    <Text
                        numberOfLines={1}
                        style={{
                            ...styles.trackTitleText,
                            color: isActiveTrack ? colors.primary : colors.text,
                        }}
                    >
                        {track.title}
                    </Text>
                    {track.artist && (
                        <Text numberOfLines={1} style={styles.trackArtistText}>
                            {track.artist}
                        </Text>
                    )}
                </View>
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    trackItemContainer: {
        flexDirection: "row",
        columnGap: 14,
        alignItems: "center",
        paddingRight: 20,
        margin: 10,
    },
    trackArtworkImage: {
        borderRadius: 10,
        width: 50,
        height: 50,
    },
    trackTitleText: {
        ...defaultStyles.text,
        fontSize: fontSize.sm,
        fontWeight: "600",
        maxWidth: "90%",
    },
    trackArtistText: {
        ...defaultStyles.text,
        color: colors.textMuted,
        fontSize: fontSize.xs,
        marginTop: 4,
    },
});
