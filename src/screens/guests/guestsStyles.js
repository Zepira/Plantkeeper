import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingVertical:20,
        marginHorizontal:20,
        borderBottomWidth:1,
        borderBottomColor:'lightgrey'
    },

    button: {
        borderWidth:1,
        width:30,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#676767',
        borderRadius: 15
    },

});

export default styles;