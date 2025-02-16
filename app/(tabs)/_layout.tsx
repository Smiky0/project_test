import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { colors, fontSize } from "../constants/tokens";
import { BlurView } from "expo-blur";

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
                    backgroundColor: colors.gray,
                },

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
                    headerLeft: undefined,
                    headerRight: undefined,
                }}
            />
            <Tabs.Screen
                name="(songs)"
                options={{
                    headerShown: false,
                    title: "",
                    tabBarLabel: "Songs",
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
                    title: "",
                    tabBarLabel: "Library",
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
