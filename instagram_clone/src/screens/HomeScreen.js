import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import BottomTabs from '../components/BottomTabs';
import Header from '../components/Header';
import Posts from '../components/home/post/Posts';
import Stories from '../components/Stories';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <Stories />
        <Posts />
      </ScrollView>
      <BottomTabs />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {backgroundColor: 'black', flex: 1},
});
