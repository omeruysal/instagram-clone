import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import BottomTabs from '../components/BottomTabs';
import Header from '../components/home/Header';
import Posts from '../components/home/post/Posts';
import Stories from '../components/home/Stories';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <Stories />
        <Posts />
        <BottomTabs />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {backgroundColor: 'black', flex: 1},
});
