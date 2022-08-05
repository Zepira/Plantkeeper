import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container:{
        margin:20
    },

    image:{
        width:'100%',
       aspectRatio: 3 / 2,
       resizeMode:'cover',
       borderRadius:7,
    },

    bedrooms:{
        color:'black',
        marginVertical:10,
        color: '#5b5b5b'
    },

    description:{
        color:'black',
        fontSize:18,
        lineHeight:26
    },

    prices:{
        color:'black',
        fontSize:18,
        marginVertical:10
    },

    oldPrice:{
        fontSize:18,
        color: '#5b5b5b',
        textDecorationLine:'line-through',
        fontWeight:'bold',
    },

    newPrice:{
        fontWeight:'bold',
        fontSize:18,
        color:'black',
    },

    totalPrice:{
        fontSize:18,
        textDecorationLine:'underline',
    }
});

export default styles;