import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 500,
        resizeMode: 'cover',
        justifyContent: 'center'
    },

    title: {
        fontSize: 70,
        fontWeight: 'bold',
        color: 'white',
        width: '90%',
        marginLeft:20
    },

    button: {
        backgroundColor:'white',
        width:200,
        marginLeft:25,
        marginTop:25,
        height: 40,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        color:'black',
        fontSize:14,
        fontWeight:'bold'

    },

    searchButton: {
        backgroundColor:'white',
        width:Dimensions.get('screen').width -20,
        marginHorizontal:10,
        height: 50,
        borderRadius: 30,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        position:'absolute',
        top:50,
        zIndex:100,
    },

    searchButtonText: {
        color:'black',
        fontSize:14,
        fontWeight:'bold'

    }
});

export default styles;