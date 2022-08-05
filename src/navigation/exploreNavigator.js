import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/home/home";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import DestinationSearch from "../screens/destinationSearch/destinationSearch";
import { createStackNavigator } from "@react-navigation/stack";
import SearchResultsNavigator from "../navigation/searchResultsNavigator";
import SearchResultsScreen from "../screens/searchResults/searchResults";

const Stack = createStackNavigator();

const ExploreNavigator = (props) => {
    return (
        <Stack.Navigator>
        <Stack.Screen
          name={'Welcome'}
          component={HomeScreen}
          options={{
              headerShown:false,
          }}
        />
        <Stack.Screen
          name={'SearchResults'}
          component={SearchResultsNavigator}
          options={{
           title:'Search your destination'
          }}
        />
      </Stack.Navigator>
    );
};

export default ExploreNavigator;

