import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/home/home";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import DestinationSearch from "../screens/destinationSearch/destinationSearch";
import ExploreNavigator from "./exploreNavigator";
import SettingsScreen from "../screens/settings/settings";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { View } from "react-native";
import Tasks from "../screens/tasks/tasks";

const Tab = createMaterialBottomTabNavigator();

const style = {
  padding:50,
  backgroundColor:'red'
}

const TabNavigator = (props) => {
    return (
        <Tab.Navigator
        activeColor='white'
        inactiveColor='#d5dec1'
        barStyle={{
          backgroundColor: '#89a365',
          position: 'absolute',
          overflow: 'hidden',
          borderRadius: 30,
          marginBottom: 10,
          marginHorizontal:4
        }}>
        <Tab.Screen
          name={'Garden'}
          component={ExploreNavigator}
          style={{backgroundColor:'red'}}
          options={{
              headerShown:false,
            tabBarIcon: ({color}) => (
              <FontAwesome name="leaf" size={25} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name={'Tasks'}
          component={Tasks}
          options={{
            tabBarIcon: ({color}) => (
              <FontAwesome5 name="tasks" size={25} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name={'Log'}
          component={HomeScreen}
          options={{
            tabBarIcon: ({color}) => (
              <FontAwesome name="plus-circle" size={25} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name={'Cook'}
          component={HomeScreen}
          options={{
            tabBarIcon: ({color}) => (
              <FontAwesome name="spoon" size={25} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name={'Settings'}
          component={SettingsScreen}
          options={{
            tabBarIcon: ({color}) => (
              <FontAwesome name="cog" size={25} color={color} />
            ),
          }}
        />
      </Tab.Navigator>

    );
};

export default TabNavigator;

