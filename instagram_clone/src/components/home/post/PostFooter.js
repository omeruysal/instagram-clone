import React, {useState} from 'react';
import {StyleSheet, Image, Text, TouchableOpacity, View} from 'react-native';
import {USERS} from '../../../data/UsersData';
import Icon from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
const PostFooter = ({post}) => {
  const [like, setLike] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.leftIconCell}>
          <View style={styles.icon}>
            <TouchableOpacity
              onPress={() => {
                setLike(pre => !pre);
              }}>
              <Icon
                name={like ? 'heart' : 'hearto'}
                size={25}
                color={like ? 'red' : 'white'}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.icon}>
            <TouchableOpacity>
              <IconFeather
                name={'message-circle'}
                size={25}
                color={'white'}
                style={{transform: [{rotateY: '180deg'}]}}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.icon}>
            <TouchableOpacity>
              <TouchableOpacity>
                <Icon name={'hearto'} size={25} color={'white'} />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rightIconCell}>
          <View>
            <TouchableOpacity>
              <Icon name={'hearto'} size={25} color={'white'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.likeNumber}>{post.likes} likes</Text>
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
            View all {post.comments.length} comments
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
        <Text style={styles.textTimeComment}>1 hour ago</Text>
      </View>
    </View>
  );
};

export default PostFooter;

const styles = StyleSheet.create({
  container: {marginHorizontal: 10, marginVertical: 10},
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  leftIconCell: {
    flexDirection: 'row',
  },
  icon: {marginRight: 10},
  text: {color: 'grey', marginLeft: 5},
  textComment: {color: 'grey', marginVertical: 5},
  textTimeComment: {color: 'grey', marginVertical: 5, fontSize: 11},
  image: {
    width: 25,
    height: 25,
    borderRadius: 50,
    resizeMode: 'cover',
    zIndex: 100,
  },
  shareIcon: {
    width: 25,
    height: 25,
    tintColor: 'red',
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
