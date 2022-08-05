import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container:{
        height:120,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        
        elevation: 7,
        margin:3,
    },

    innerContainer:{
        flexDirection:'row',
        backgroundColor:'white',
        borderRadius:10,
        overflow:'hidden',
       
    },

    image:{
        height:'100%',
       aspectRatio: 1,
       resizeMode:'cover',
    },

    

    bedrooms:{
        color:'black',
        marginVertical:10,
        color: '#5b5b5b'
    },

    description:{
        color:'black',
        fontSize:14,
    },

    prices:{
        color:'black',
        fontSize:15,
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
        fontSize:15,
        color:'black',
    },

    totalPrice:{
        fontSize:18,
        textDecorationLine:'underline',
    }
});

export default styles;