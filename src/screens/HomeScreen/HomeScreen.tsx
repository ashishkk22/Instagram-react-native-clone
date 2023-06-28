import React from 'react';
import {FlatList} from 'react-native';
import posts from '../../assets/data/posts.json';
import FeedPost from '../../components/FeedPost/FeedPost';

const HomeScreen = () => {
  return (
    <FlatList
      data={posts}
      scrollEnabled={true}
      renderItem={({item}) => <FeedPost post={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default HomeScreen;
