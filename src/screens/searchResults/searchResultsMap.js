import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ImageBackground, Pressable, Image, FlatList, useWindowDimensions } from 'react-native';
import styles from './searchResultsStyles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Post from '../../components/post/post';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import CustomMarker from '../../components/customMarker/customMarker'
import PostCarousel from '../../components/postCarousel/postCarousel';
import { API, graphqlOperation } from 'aws-amplify';
import { listPosts } from '../../graphql/queries';

const SearchResultsMap = (props) => {

  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const [posts, setPosts] = useState([]);
  const width = useWindowDimensions().width;
  const flatlistRef = useRef();
  const viewConfig = useRef({itemVisiblePercentThreshold: 70})
  const onViewChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id)
    }
  });
  const map = useRef();

  const {guests, viewport} = props;

  console.log(viewport);

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

  useEffect(() => {
    if(!selectedPlaceId || !flatlistRef){
      return;
    }
    const index = posts.findIndex(place => place.id === selectedPlaceId);
    flatlistRef.current.scrollToIndex({index});
    const selectedPlace = posts[index];
    const region = {
      latitude: selectedPlace.latitude,
      longitude: selectedPlace.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8
    }
    map.current.animateToRegion(region);
  }, [selectedPlaceId])

  return (
    <View style={{ width: '100%', height: '100%' }}>
      <MapView 
      ref={map}
      style={{ width: '100%', height: '100%' }}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}
      >
        {posts.map(place => (
          <CustomMarker
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
            coordinate={{latitude: place.latitude, longitude:place.longitude}}
            price={place.newPrice}
          />)
        )}
      </MapView>

      <View style={{ position: 'absolute', bottom: 2, }}>
        <FlatList
          ref={flatlistRef}
          data={posts}
          renderItem={({ item }) => <PostCarousel post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width-60}
          decelerationRate={"fast"}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />

      </View>
    </View>
  );
}

export default SearchResultsMap;