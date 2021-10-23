import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView styles={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.icon}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('HomeScreen');
            }}>
            <Icon name={'arrow-back-ios'} size={25} color={'white'} />
          </TouchableOpacity>
        </View>
        <View style={styles.titleView}>
          <Text style={styles.title}>New Post</Text>
        </View>
        <View></View>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {},
  innerContainer: {
    backgroundColor: 'black',
    height: 40,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {marginLeft: 5},
  title: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
  },
  titleView: {
    marginRight: 15,
  },
});
