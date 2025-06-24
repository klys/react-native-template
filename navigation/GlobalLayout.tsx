// Layout.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import BottomBar from './ButtomBar';

const GlobalLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
      <BottomBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});

export default GlobalLayout;
