import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import styles from './homeStyles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/core';


const HomeScreen = (props) => {
//'#89a365' pale green
    const navigation = useNavigation();
    return (
        <View style={{backgroundColor:'#ffffff', height:'100%'}}>
             {/* Search bar */}
            



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
               
        </View>
    );
};

export default HomeScreen;