import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import DestinationSearch from '../../src/screens/destinationSearch/destinationSearch';
import Guests from "../screens/guests/guests";
import HomeScreen from "../screens/home/home";
import TabNavigator from "./tabNavigator";
import Post from "../components/post/post";
import PostScreen from "../screens/postScreen/postScreen";
import SettingsScreen from "../screens/settings/settings";
import UserSettingsScreen from "../screens/settings/userSettings";

const Stack = createStackNavigator();

const Router = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
        <Stack.Screen
          name={"Home"}
          component={TabNavigator}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={"Destination Search"}
          component={DestinationSearch}
          options={{
            title: "Search your destination"
          }}
        />

        <Stack.Screen
          name={"Guests"}
          component={Guests}
          options={{
            title: "How many people?"
          }}
        />

        <Stack.Screen
          name={"Post"}
          component={PostScreen}
          options={{
            title: "Accommodation"
          }}
        />
        <Stack.Screen
          name={"Settings"}
          component={SettingsScreen}
          options={{
            title: "Settings"
          }}
        />
        <Stack.Screen
          name={"User Settings"}
          component={UserSettingsScreen}
          options={{
            title: "User Settings"
          }}
        />
      </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;

