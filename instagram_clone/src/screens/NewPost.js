import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../components/newPost/Header';
import PostUploader from '../components/newPost/PostUploader';

const NewPost = () => {
  return (
    <View style={styles.container}>
      <Header />
      <PostUploader />
    </View>
  );
};

export default NewPost;

const styles = StyleSheet.create({
  container: {backgroundColor: 'black', flex: 1},
});
