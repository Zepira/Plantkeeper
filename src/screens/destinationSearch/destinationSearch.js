import React, { useState } from 'react';
import { View, } from 'react-native';
import styles from './destinationSearchStyles';
import { useNavigation } from '@react-navigation/core';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import SuggestionRow from './suggestionRow'


const DestinationSearch = (props) => {

    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            {/* Input component */}
            <View>
                <GooglePlacesAutocomplete
                    placeholder='Where are you going?'
                    styles={{ textInput: styles.textInput }}
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(data, details);
                        navigation.navigate("Guests",{viewport: details.geometry.viewport});
                    }}
                    query={{
                        key: 'AIzaSyCM5U3UFiu9JjD82wGVa9eVpMzpJ1lRl0w',
                        language: 'en',
                        type:'(cities)'
                        
                    }}
                    fetchDetails
                    suppressDefaultStyles
                    renderRow={(item) => <SuggestionRow item={item}/>}
                    isRowScrollable={true}
                />
            </View>
           
        </View>);
}

export default DestinationSearch;