import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MessengerIcon from 'react-native-vector-icons/Fontisto';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity>
          <Image
            style={styles.logo}
            source={require('../../src/assets/images/logoWhite.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.iconsContainer}>
        <View style={styles.icon}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('NewPostScreen');
            }}>
            <Icon size={25} name={'plus-square-o'} color={'white'} />
          </TouchableOpacity>
        </View>
        <View style={styles.icon}>
          <TouchableOpacity>
            <Icon size={25} name={'heart-o'} color={'white'} />
          </TouchableOpacity>
        </View>
        <View style={styles.icon}>
          <TouchableOpacity>
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadBadgeText}>10</Text>
            </View>
            <MessengerIcon size={25} name={'messenger'} color={'white'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  icon: {
    marginLeft: 20,
  },
  unreadBadge: {
    backgroundColor: 'red',
    position: 'absolute',
    left: 10,
    bottom: 15,
    width: 23,
    height: 18,
    borderRadius: 25,
    justifyContent: 'center',
    zIndex: 100,
  },
  unreadBadgeText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 11,
    color: 'white',
  },
});
