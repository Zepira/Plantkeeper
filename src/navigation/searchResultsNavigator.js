import React from "react";

import SearchResultsScreen from "../screens/searchResults/searchResults";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SearchResultsMap from "../screens/searchResults/searchResultsMap";
import { useRoute } from '@react-navigation/core';

const Tab = createMaterialTopTabNavigator();


const SearchResultsNavigator = (props) => {

  const route = useRoute();
  const {guests, viewport} = route.params;


  return (

    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: '#f15454', tabBarIndicatorStyle: {
        backgroundColor: '#f15454'
      }
    }}>
      <Tab.Screen name={"list"}>
        {() => (
          <SearchResultsScreen guests={guests} viewport={viewport} />
        )}
      </Tab.Screen>
      <Tab.Screen
        name={"map"}>
        {() => (
          <SearchResultsMap guests={guests} viewport={viewport} />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default SearchResultsNavigator;

