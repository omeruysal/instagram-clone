import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const Story = props => {
  let {image, user} = props.data;
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.storyColor}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjx77Zh1wt99zXCds0wh1hVaVjsGt7ilgRE9Yp7Rbn3qbF7vQa8C9BSm3WTNe2ISAnaTY&usqp=CAU',
            }}
          />
          <Image style={styles.image} source={{uri: image}} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {user.length > 10
              ? user.slice(0, 9).toLowerCase() + '...'
              : user.toLowerCase()}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Story;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 75,
    height: 95,
  },
  storyColor: {
    width: 70,
    height: 70,
    borderRadius: 50,
    position: 'absolute',
    zIndex: 80,
  },
  text: {
    color: 'white',
    marginTop: 5,
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 50,
    resizeMode: 'cover',
    zIndex: 100,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
