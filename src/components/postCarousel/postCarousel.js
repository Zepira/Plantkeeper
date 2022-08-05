import React from 'react';
import { View, Text, ImageBackground, Pressable, Image, useWindowDimensions } from 'react-native';
import styles from './postCarouselStyles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/core';


const PostCarousel = (props) => {

    const post = props.post;
    const width = useWindowDimensions().width;
    const navigation = useNavigation();
    const goToPostPage = () => {
        navigation.navigate('Post', {postId: post.id});
    }

    console.log(props);
    return (
        <Pressable style={[styles.container, {width: width-60}]} onPress={goToPostPage}>
            {/* Image */}
            <View style={styles.innerContainer}>
                <Image style={styles.image} source={{ uri: post.image }} />

                <View style={{flex:1, marginHorizontal:10}}>
                    {/* Beds */}
                    <Text style={styles.bedrooms}>{post.bed} bed {post.bedroom} bedroom</Text>

                    {/* Description */}
                    <Text style={styles.description} numberOfLines={2}>
                        {post.type}. {post.title}
                    </Text>

                    {/* Price */}
                    <Text style={styles.prices}>
                        <Text style={styles.newPrice}>${post.newPrice} </Text>
                        / night
                    </Text>
                </View>
            </View>
        </Pressable>
    );
};

export default PostCarousel;