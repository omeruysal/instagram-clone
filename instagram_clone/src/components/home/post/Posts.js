import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Post from './Post';
import {POSTS} from '../../../data/PostsData';

const Posts = () => {
  return (
    <View>
      {POSTS.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({});
