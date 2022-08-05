import React, {useState} from 'react';
import { View, Text} from 'react-native';
import { Marker } from 'react-native-maps';


const CustomMarker = (props) => {

    const { isSelected, onPress, coordinate, price } = props;

    return (

        <Marker coordinate={coordinate}  onPress={onPress} >
            <View style={{ backgroundColor: isSelected ?'black': 'white', padding: 1, borderRadius: 10, borderColor: 'grey', borderWidth: 1, }}>
                <Text style={{ fontWeight: 'bold', padding: 1, color: isSelected ? 'white':'black' }}>${price}</Text>
            </View>
        </Marker>
    );

}

export default CustomMarker;