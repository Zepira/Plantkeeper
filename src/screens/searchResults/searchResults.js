import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, Pressable, Image, FlatList } from 'react-native';
import styles from './searchResultsStyles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Post from '../../components/post/post';
import { API, graphqlOperation } from 'aws-amplify';
import { listPosts } from '../../graphql/queries';

const SearchResultsScreen = (props) => {

    const [posts, setPosts] = useState([]);
    const {guests, viewport} = props;

    useEffect(() => {
        const fetchPosts = async () => {
            try {
            const postResults = await API.graphql(graphqlOperation(listPosts,{
                filter: {
                   and:{ 
                       maxGuests:{
                      ge:guests
                    },
                    latitude: {
                        between:[viewport.southwest.lat,viewport.northeast.lat],
                    },
                    longitude: {
                        between: [viewport.southwest.lng,viewport.northeast.lng],
                    }
                  }
                }
            })
            );
            setPosts(postResults.data.listPosts.items)
        
        } catch (e) {
            console.log(e);
        }
    }
    fetchPosts();
    }, [])

    return (
        <View>
         
            <FlatList data={posts} renderItem={({ item }) => <Post key={item.id} post={item} />} />
        </View>
    );
}

export default SearchResultsScreen;