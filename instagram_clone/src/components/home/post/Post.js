import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PostHeader from './PostHeader';
import Posts from './Posts';
import PostImage from './PostImage';
import PostFooter from './PostFooter';

const Post = ({post}) => {
  return (
    <View style={styles.container}>
      <PostHeader username={post.user} image={post.profilePicture} />
      <PostImage img={post.imageUrl} />
      <PostFooter post={post} />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {marginTop: 10},
  text: {
    color: 'white',
  },
});
