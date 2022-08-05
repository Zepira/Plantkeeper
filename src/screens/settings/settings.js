import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/core';
import Auth from '@aws-amplify/auth';
import UserSettingsScreen from './userSettings';


const SettingsScreen = (props) => {

    const logout = () => {
        Auth.signOut();
    }
    const navigation = useNavigation();

    return (
        <View 
        style={{display:'flex',  alignItems:'center', height:'100%'}}
        >
           
                <Pressable style={{width:'90%', height:40,  justifyContent:'center', alignContent:'center'}} onPress={logout}>
                    <Text>Log Out</Text>
                </Pressable>
                <Pressable style={{width:'90%', height:40,  justifyContent:'center', alignContent:'center'}} onPress={() => navigation.navigate("User Settings")}>
                    <Text>User Settings</Text>
                </Pressable>
                

        </View>
    );
};

export default SettingsScreen;