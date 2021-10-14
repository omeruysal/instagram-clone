import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const PostHeader = ({username, image}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftCell}>
        <TouchableOpacity style={styles.button}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.storyColor}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjx77Zh1wt99zXCds0wh1hVaVjsGt7ilgRE9Yp7Rbn3qbF7vQa8C9BSm3WTNe2ISAnaTY&usqp=CAU',
              }}
            />
            <Image style={styles.image} source={{uri: image}} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <View style={styles.textView}>
            <Text style={styles.text}>{username}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button}>
        <View style={styles.icon}>
          <Icon name={'dots-three-horizontal'} color={'white'} size={25} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PostHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
  },
  leftCell: {
    flexDirection: 'row',
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 50,
    resizeMode: 'cover',
    zIndex: 100,
  },
  imageContainer: {
    marginLeft: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {color: 'white', fontWeight: 'bold'},
  textView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {marginRight: 5},

  storyColor: {
    width: 37,
    height: 37,
    borderRadius: 50,
    position: 'absolute',
    zIndex: 80,
  },
});
