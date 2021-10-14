import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Dimensions} from 'react-native';
const PostImage = ({img}) => {
  const windowWidth = Dimensions.get('window').width;
  return (
    <View>
      <Image
        style={[styles.image, {width: windowWidth}]}
        source={{
          uri: img,
        }}
      />
    </View>
  );
};

export default PostImage;

const styles = StyleSheet.create({
  image: {
    height: 350,
    marginTop: 10,
    resizeMode: 'contain',
  },
});
