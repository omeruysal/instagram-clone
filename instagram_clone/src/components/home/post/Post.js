import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PostHeader from './PostHeader';
import Posts from './Posts';
import PostImage from './PostImage';
import PostFooter from './PostFooter';

const Post = props => {
  return (
    <View>
      <PostHeader />
      <PostImage />
      <PostFooter />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
});
