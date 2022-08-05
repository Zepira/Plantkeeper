import { useNavigation, useRoute } from '@react-navigation/core';
import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './guestsStyles';


const Guests = (props) => {

    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const navigation = useNavigation();
    const route = useRoute();

    return (
    <View style={{color:'black', justifyContent:'space-between', height:'100%'}}>
        <View>
            <View style={styles.row}>
            <View>
                <Text style={{fontWeight:'bold', color:'black'}}>Adults</Text>
                <Text  style={{color:'#8d8d8d'}}>Ages 13 or above</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center', alignContent:'center'}}>
                <Pressable onPress={() => setAdults(Math.max(0, adults-1))} style={styles.button}>
                    <Text style={{fontSize:20, color:'#474747'}}>-</Text>
                </Pressable>
                <Text style={{marginHorizontal:20, fontSize:16, width:20, textAlign:'center'}}>{adults}</Text>
                <Pressable onPress={() => setAdults(adults+1)} style={styles.button}>
                    <Text style={{fontSize:20, color:'#474747'}}>+</Text>
                </Pressable>
            </View>
            </View>

            <View style={styles.row}>
            <View>
                <Text style={{fontWeight:'bold', color:'black'}}>Children</Text>
                <Text  style={{color:'#8d8d8d'}}>Ages 2 to 12</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center', alignContent:'center'}}>
                <Pressable onPress={() => setChildren(Math.max(0, children-1))} style={styles.button}>
                    <Text style={{fontSize:20, color:'#474747'}}>-</Text>
                </Pressable>
                <Text style={{marginHorizontal:20, fontSize:16, width:20, textAlign:'center'}}>{children}</Text>
                <Pressable onPress={() => setChildren(children+1)} style={styles.button}>
                    <Text style={{fontSize:20, color:'#474747'}}>+</Text>
                </Pressable>
            </View>
            </View>

            <View style={styles.row}>
        <View>
            <Text style={{fontWeight:'bold', color:'black'}}>Infants</Text>
            <Text  style={{color:'#8d8d8d'}}>Under 2</Text>
        </View>
        <View style={{flexDirection:'row', alignItems:'center', alignContent:'center'}}>
            <Pressable onPress={() => setInfants(Math.max(0, infants-1))} style={styles.button}>
                <Text style={{fontSize:20, color:'#474747'}}>-</Text>
            </Pressable>
            <Text style={{marginHorizontal:20, fontSize:16, width:20, textAlign:'center'}}>{infants}</Text>
            <Pressable onPress={() => setInfants(infants+1)} style={styles.button}>
                <Text style={{fontSize:20, color:'#474747'}}>+</Text>
            </Pressable>
        </View>
        </View>
        </View>
        <View>
            <Pressable 
            onPress={() => navigation.navigate("Home", 
            {screen: "Explore",
                params: {
                    screen: "SearchResults",
                    params:{
                        guests: adults + children,
                        viewport: route.params.viewport
                    }
                   
            }})}
            style={{
                marginBottom:20, 
                backgroundColor:'#f15454',
                 justifyContent:'center',
                  alignItems:'center',
                  height:50,
                  marginHorizontal: 20,
                  borderRadius: 10,
                  }}>
                <Text style={{color:'white',
                  fontWeight:'bold', fontSize:20}}>
                    Search
                </Text>
            </Pressable>
        </View>
    </View>);
}

export default Guests;