import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Post from './Post';
import {POSTS} from '../../../data/PostsData';

const Posts = () => {
  return (
    <View>
      <FlatList data={POSTS} renderItem={({item}) => <Post data={item} />} />
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({});
