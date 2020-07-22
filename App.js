import React from 'react';
import {
  StyleSheet,
  Text,
  StatusBar,
  SafeAreaView,
  FlatList,
} from 'react-native';
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
const COLORS = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb4b16' },
  { colorName: 'Red', hexCode: '#dc322f' },
  { colorName: 'Magenta', hexCode: '#d33682' },
  { colorName: 'Violet', hexCode: '#6c71c4' },
  { colorName: 'Blue', hexCode: '#268bd2' },
  { colorName: 'Cyan', hexCode: '#2aa198' },
  { colorName: 'Green', hexCode: '#859900' },
];
const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={COLORS}
        keyExtractor={(item) => item.hexCode}
        ListHeaderComponent={() => <Text style={styles.text}>Solarize</Text>}
        renderItem={({ item }) => (
          <StyledBox colorName={item.colorName} hexCode={item.hexCode} />
        )}
      />

      <Text style={styles.text}>Here are some boxes of different colors</Text>
      {/* DO NOT USE MAP ON REACT NATIVE */}
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
