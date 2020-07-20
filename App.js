import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Hello From App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'aquamarine',
    marginTop: StatusBar.currentHeight,
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
});
