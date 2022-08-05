import React from 'react';
import {View, Text, ImageBackground, Pressable, Image} from 'react-native';
import styles from './postStyles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/core';


const Post = (props) => {


    const post = props.post;
    const navigation = useNavigation();
    const goToPostPage = () => {
        navigation.navigate('Post', {postId: post.id});
    }

    return (
        <Pressable style={styles.container} onPress={goToPostPage}>
            {/* Image */}
            <Image style={styles.image} source={{uri: post.image}} />

            {/* Beds */}
            <Text style={styles.bedrooms}>{post.bed} bed {post.bedroom} bedroom</Text>

            {/* Description */}
            <Text style={styles.description} numberOfLines={2}>
                {post.type}. {post.title}
            </Text>

            {/* Price */}
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>${post.oldPrice}</Text>
                <Text style={styles.newPrice}>  ${post.newPrice} </Text>
                / night
            </Text>

            {/* Total Price */}
            <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
        </Pressable>
    );
};

export default Post;