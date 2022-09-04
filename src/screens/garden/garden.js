import React from 'react';
import { View, Text, ImageBackground, Pressable } from 'react-native';
import styles from './gardenStyles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/core';
import { Alert, ScrollView, StyleSheet } from 'react-native';
import {
    Avatar,
    Paragraph,
    Card,
    Button,
    IconButton,
    useTheme,
    Title, 
    List,
    Checkbox,
    Colors,
    TouchableRipple,
} from 'react-native-paper';
import garden from '../../../assets/data/garden'
import Images from "../../../assets/images/images";


const style={
    card:{
        margin:10,
        borderRadius: 30,
        padding:10
    },
    cardTitle:{
        fontFamily: 'helvetica',
        fontWeight:'bold'
    },
}

var plantImages = {
    carrot: require('../../../assets/images/carrot.png'),
    cabbage: require('../../../assets/images/cabbage.png')
};

const Garden = (props) => {
    //'#89a365' pale green
    const navigation = useNavigation();
    const [plantList, setPlantList] = React.useState(garden);

    const checkedHandler = (completed, taskIndex, subtaskIndex) => {

        setTaskList((prev) => {

            let newState = { ...prev };

            newState[taskIndex].subTasks[subtaskIndex].completed = !completed;
          
            return newState;
        });
    };


    return (
        <ScrollView>
            {plantList.map((plant, plantIndex) => {
                const plantedDate = new Date(plant.datePlanted);
                let harvestDate = new Date(plantedDate);
                harvestDate.setDate(harvestDate.getDate() + plant.harvestDaysStart);
                let daysTillHarvest = Math.ceil((harvestDate.getTime() - new Date().getTime()) / (1000 * 3600 * 24));

                return (
                <Card style={style.card} key={plant.id}>
                    <Card.Title  titleStyle={style.cardTitle} title={plant.plantName} />
                    <Card.Content style={style.cardContent}>
                    <Avatar.Image size={24} source={Images[plant.plantName]} />
                    <Text>planted date {plantedDate.toLocaleDateString()}</Text>
                    <Text>harvest date {harvestDate.toLocaleDateString()}</Text>
                    <Text>days till harvest {daysTillHarvest} days</Text>
                    
                    </Card.Content>
                </Card>
                );
            }
            )}
        </ScrollView>
    );
};

export default Garden;