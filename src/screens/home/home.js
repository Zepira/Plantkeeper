import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import styles from './homeStyles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/core';


const HomeScreen = (props) => {

    const navigation = useNavigation();
    return (
        <View>
             {/* Search bar */}
            


                <ImageBackground 
                source={require('../../../assets/images/wallpaper.jpg')} 
                style={styles.image}>
                     <Pressable style={styles.searchButton} onPress={() => console.log( "Explore button clicked")}>
            
            <Fontisto name='search' size={25} color={'#f15454'} />
            <Text style={styles.searchButtonText}>Where are you going?</Text>
    </Pressable>

                {/* Title */}
                <Text style={styles.title}>Go Anywhere</Text>

                {/* Button */}
                <Pressable style={styles.button} onPress={() => navigation.navigate("Destination Search")}>
                    <Text style={styles.buttonText}>Explore nearby stays</Text>
                    </Pressable>
                </ImageBackground>
        </View>
    );
};

export default HomeScreen;