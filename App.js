import React from 'react';
import { StyleSheet, Text, StatusBar, SafeAreaView } from 'react-native';
import StyledBox from './components/StyledBox';
import { activateKeepAwake } from 'expo-keep-awake';

activateKeepAwake();

// import styled from 'styled-components/native';

const colors = {
  Cyan: '#2aa198',
  Orange: '#cb4b16',
  Blue: '#268bd2',
  Magenta: '#d33682',
};
const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.text}>Here are some boxes of different colors</Text>
      {Object.keys(colors).map((color) => {
        return (
          <StyledBox key={color} colorName={color} hexCode={colors[color]} />
        );
      })}
      <StyledBox colorName={'Red'} hexCode={'#cb5555'} />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  safeArea: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    padding: 10,
    alignItems: 'stretch',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
