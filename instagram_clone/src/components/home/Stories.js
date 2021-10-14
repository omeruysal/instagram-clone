import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {USERS} from '../../data/UsersData';
import Story from './Story';

const Stories = () => {
  return (
    <View>
      <FlatList
        horizontal={true}
        data={USERS}
        renderItem={({item}) => <Story data={item} />}
      />
      <View style={styles.line}></View>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  line: {
    borderBottomColor: 'grey',
    borderWidth: 0.5,
  },
});
