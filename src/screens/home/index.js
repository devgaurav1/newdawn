/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from './components/header';
import StoryList from './components/story-list';
import PostList from './components/post-list';
import ExplorerButton from './components/explorer-button';

const Home = () => {
  return (
    <>
      <View style={styles.container}>
        <Header />
        <StoryList />
        <PostList />
      </View>
      <ExplorerButton />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
export default Home;
