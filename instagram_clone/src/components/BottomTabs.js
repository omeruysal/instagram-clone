import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import IconGlass from 'react-native-vector-icons/Entypo';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconFeather from 'react-native-vector-icons/Feather';
import {USERS} from '../data/UsersData';

const BottomTabs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.icon}>
          <TouchableOpacity>
            <IconGlass size={25} name={'home'} color={'white'} />
          </TouchableOpacity>
        </View>
        <View style={styles.icon}>
          <TouchableOpacity>
            <IconGlass size={25} name={'magnifying-glass'} color={'white'} />
          </TouchableOpacity>
        </View>
        <View style={styles.iconPlay}>
          <TouchableOpacity>
            <IconFoundation size={35} name={'play-video'} color={'white'} />
          </TouchableOpacity>
        </View>
        <View style={styles.icon}>
          <TouchableOpacity>
            <IconFeather size={25} name={'shopping-bag'} color={'white'} />
          </TouchableOpacity>
        </View>
        <View style={styles.icon}>
          <TouchableOpacity>
            <Image style={styles.image} source={{uri: USERS[0].image}} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  container: {height: 40},
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
  },
  icon: {},
  iconPlay: {
    marginTop: -5,
    height: 30,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 50,
    resizeMode: 'cover',
    zIndex: 100,
  },
});
