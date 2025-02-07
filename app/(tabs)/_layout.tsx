import { Tabs } from "expo-router";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { colors, fontSize } from "../constants/tokens";
import { BlurView } from "expo-blur";
import NowPlayingWidget from "../components/now_playing";
import React from "react";

export default function RootLayout() {
    return (
        <Tabs
            screenOptions={{
                headerStyle: { backgroundColor: colors.background },
                headerShadowVisible: false,

                tabBarStyle: {
                    position: "absolute",
                    flex: 1,
                    justifyContent: "center",
                    borderRadius: 20,
                    overflow: "hidden",
                    borderTopWidth: 0,
                    elevation: 0, // Removes shadow on Android
                    boxShadow: "0", // Removes shadow on iOS
                    padding: 4,
                    height: "8%",
                    margin: 10,
                    marginHorizontal: 20,
                },

                tabBarBackground: () => (
                    <BlurView
                        intensity={65}
                        tint="dark"
                        style={{
                            ...StyleSheet.absoluteFillObject,
                            overflow: "hidden",
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                        }}
                    />
                ),

                tabBarActiveTintColor: colors.primary,
                tabBarShowLabel: true,
                tabBarHideOnKeyboard: true,

                tabBarLabelStyle: {
                    fontSize: fontSize.xs,
                    fontWeight: "500",
                },
            }}
        >
            <Tabs.Screen
                name="homepage"
                options={{
                    headerShown: false,
                    title: "",
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, focused }) => (
                        <FontAwesome6
                            name={focused ? "house" : "house"}
                            size={24}
                            color={color}
                        />
                    ),
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => console.log("Profile pressed!")}
                        >
                            <Image
                                source={{
                                    uri: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
                                }}
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 20,
                                    margin: 15,
                                }}
                            />
                        </TouchableOpacity>
                    ),
                    headerRight: undefined,
                }}
            />
            <Tabs.Screen
                name="(songs)"
                options={{
                    headerShown: false,
                    title: "Songs",
                    tabBarIcon: ({ color, focused }) => (
                        <FontAwesome6
                            name={focused ? "music" : "music"}
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="library"
                options={{
                    headerShown: false,
                    title: "Library",
                    tabBarIcon: ({ color, focused }) => (
                        <FontAwesome6
                            name={focused ? "book" : "book"}
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
