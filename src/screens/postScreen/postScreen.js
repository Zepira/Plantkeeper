import React, {useState, useEffect} from "react";
import { View, Text } from "react-native";
import DetailedPost from '../../components/detailedPost/detailedPost';
import {useRoute} from '@react-navigation/native';
import { API, graphqlOperation } from 'aws-amplify';
import { listPosts } from '../../graphql/queries';


const PostScreen = (props) => {
  const route = useRoute();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      const fetchPosts = async () => {
          try {
          const postResults = await API.graphql(graphqlOperation(listPosts));
          setPosts(postResults.data.listPosts.items)
      
      } catch (e) {
          console.log(e);
      }
  }
  fetchPosts();
  }, [])

  const post = posts.find(place => place.id === route.params.postId);

  return (
    <View style={{backgroundColor: 'white'}}>
      <DetailedPost post={post} />
    </View>
  );
};

export default PostScreen;