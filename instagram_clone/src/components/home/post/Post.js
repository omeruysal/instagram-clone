import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PostHeader from './PostHeader';
import Posts from './Posts';
import PostImage from './PostImage';
import PostFooter from './PostFooter';

const Post = ({post}) => {
  const [option, setOption] = useState(false);
  useEffect(() => {
    if (option === true) {
    }
  }, [option]);
  return (
    <View style={styles.container}>
      <PostHeader
        username={post.user}
        image={post.profilePicture}
        setOption={setOption}
      />
      <PostImage img={post.imageUrl} />
      <PostFooter post={post} />
      <PostOption />
    </View>
  );
};

const PostOption = () => {
  return <View></View>;
};
export default Post;

const styles = StyleSheet.create({
  container: {marginTop: 10},
  text: {
    color: 'white',
  },
});
