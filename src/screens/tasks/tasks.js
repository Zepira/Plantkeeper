import React from 'react';
import { View, Text, ImageBackground, Pressable } from 'react-native';
import styles from './taskStyles';
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
    TouchableRipple
} from 'react-native-paper';
import tasks from '../../../assets/data/tasks'


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



const Tasks = (props) => {
    //'#89a365' pale green
    const navigation = useNavigation();
    const [taskList, setTaskList] = React.useState(tasks);

    const checkedHandler = (completed, taskIndex, subtaskIndex) => {

        setTaskList((prev) => {

            let newState = { ...prev };

            newState[taskIndex].subTasks[subtaskIndex].completed = !completed;
          
            return newState;
        });
    };

    return (
        <ScrollView>
            {tasks.map((task, taskIndex) => (
                <Card style={style.card} key={task.id}>
                    <Card.Title  titleStyle={style.cardTitle} title={task.taskName} />
                    <Card.Content style={style.cardContent}>
                        {task.subTasks.map((subtask, subtaskIndex) => (
                               <Checkbox.Item
                                key={subtask.id}
                                 color='#89a365'
                                 label={subtask.description}
                                 position='leading'
                                 status={subtask.completed ? 'checked' : 'unchecked'}
                                 onPress={() => checkedHandler(subtask.completed, taskIndex, subtaskIndex)}
                               />
                            
                        ))}  
                    </Card.Content>
                </Card>
            ))}
        </ScrollView>
    );
};

export default Tasks;