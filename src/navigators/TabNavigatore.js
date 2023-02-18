import React from "react";
import { BackHandler, SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import Home from "../pages/home";
import AboutUs from "../pages/about-us";
import Payment from "../pages/payment";

const Top = createBottomTabNavigator();

const TopNavigator = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
        <Top.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size}) => {
                if(route.name == 'Home') {
                    return (
                        <Icon
                            // name={ focused ? "bar-chart" : "bar-chart-outline"}
                            name={ focused ? "home": "home-outline"}
                            size={ size }
                            color= { color }
                            type="ionicon"
                        />
                    )
                } else if ( route.name == 'Payment') {
                    return (
                        <Icon
                            name={ focused ? "account-cash-outline": "cash"}
                            size={ size }
                            color={color}
                            type="material-community"
                        />
                    )
                } else if (route.name == 'About-us') {
                    return (
                        <Icon
                            name={ focused ? "account-cog" : "account-outline" }
                            size={ size }
                            color={color}
                            type="material-community"
                        />
                    )
                } 
            },
            tabBarInactiveTintColor: 'gray',
            tabBarActiveTintColor: '#0072CE',
            headerShown: false
        })}
        >
            <Top.Screen name="Home" component={Home} options={{ headerShown: false }}/>
            <Top.Screen name="Payment" component={Payment}/>
            <Top.Screen name="About-us" component={AboutUs}/>
        </Top.Navigator>
        </SafeAreaView>
    )
}

export default TopNavigator;