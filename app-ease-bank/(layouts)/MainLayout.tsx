import { AccountsScreen, HomeScreen, PaymentsScreen, ProfileScreen } from "@/(components)/(main)";
import _colors from "@/utils/colors";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Octicons from "@expo/vector-icons/Octicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

export default function MainLayout() {

    const tabItems = [
        { name: "Home", component: HomeScreen, iconType: "home" },
        { name: "Accounts", component: AccountsScreen, iconType: "wallet" },
        { name: "Payments", component: PaymentsScreen, iconType: "send" },
        { name: "Profile", component: ProfileScreen, iconType: "person" },
    ] as const;

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    position: "absolute",
                    bottom: 20,
                    left: 20,
                    right: 20,
                    backgroundColor: "#ffffff",
                    marginHorizontal: 10,
                    borderRadius: 30,
                    height: 60,
                    elevation: 10,
                    shadowColor: "#000000",
                    shadowOffset: {
                        width: 0,
                        height: 10,
                    },
                    shadowOpacity: 0.15,
                    shadowRadius: 10,
                    paddingTop: 10,
                    paddingBottom: 10,
                    overflow: "hidden",
                }
            }}
        >
            {tabItems.map(({ name, component, iconType }) => (
                <Tab.Screen
                    key={name}
                    name={name}
                    component={component}
                    options={{
                        tabBarIcon: ({ focused, size, color }) => (
                            <IconRender type={iconType} size={size} color={color} focused={focused} />
                        ),
                        tabBarLabel: "",
                        tabBarActiveTintColor: _colors.indigo,
                        tabBarInactiveTintColor: "#8e8e93",
                        tabBarShowLabel: false,
                        tabBarLabelPosition: "below-icon",
                        tabBarButton: (props) => (
                            <FontAwesome6
                                {...props}
                                style={{ backgroundColor: "white", padding: 0, margin: "auto", }}
                            />
                        ),
                    }}
                />
            ))}
        </Tab.Navigator>
    );
}

interface IconRenderProps {
    type: "home" | "wallet" | "send" | "card" | "person";
    size: number;
    color: string;
    focused: boolean;
}

const IconRender = ({ type, size, color, focused }: IconRenderProps) => {
    const icons = {
        home: <Octicons name="home" size={size} color={focused ? "#fff" : color} />,
        wallet: <Ionicons name="wallet" size={size} color={focused ? "#fff" : color} />,
        send: <MaterialIcons name="qr-code-scanner" size={size} color={focused ? "#fff" : color} />,
        card: <MaterialIcons name="credit-card" size={size} color={focused ? "#fff" : color} />,
        person: <Ionicons name="person" size={size} color={focused ? "#fff" : color} />,
    };

    return (
        <View
            style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: focused ? "#6c63ff" : "transparent",
            }}
        >
            {icons[type]}
        </View>
    );
};
