import React from 'react';
import {StyleSheet, Image, Text, TouchableOpacity, View} from 'react-native';
import {USERS} from '../../../data/UsersData';
const PostFooter = ({post}) => {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <View></View>
          <View></View>
          <View>
            <Image
              style={styles.arrow}
              source={{
                uri: '',
              }}
            />
          </View>
        </View>
        <View>
          <View></View>
        </View>
      </View>
      <View>
        <Text style={styles.likeNumber}>{post.likes} like</Text>
      </View>
      <View style={styles.captionCell}>
        <View>
          <Text style={styles.username}>{post.user}</Text>
        </View>
        <View>
          <Text style={styles.caption}>{post.caption}</Text>
        </View>
      </View>
      <TouchableOpacity>
        <View>
          <Text style={styles.textComment}>
            See all {post.comments.length} comments
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.commentCell}>
          <Image style={styles.image} source={{uri: USERS[0].image}} />
          <Text style={styles.text}>Add comment...</Text>
        </View>
      </TouchableOpacity>
      <View>
        <Text style={styles.textComment}>1 hour ago</Text>
      </View>
    </View>
  );
};

export default PostFooter;

const styles = StyleSheet.create({
  container: {marginHorizontal: 10, marginVertical: 10},
  text: {color: 'grey', marginLeft: 5},
  textComment: {color: 'grey', marginVertical: 5},
  image: {
    width: 25,
    height: 25,
    borderRadius: 50,
    resizeMode: 'cover',
    zIndex: 100,
  },
  commentCell: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  captionCell: {flexDirection: 'row', marginTop: 5},
  likeNumber: {color: 'white', fontWeight: 'bold'},
  username: {color: 'white', fontWeight: 'bold'},
  caption: {color: 'white', marginLeft: 5},
  arrow: {height: 20, width: 20},
});
