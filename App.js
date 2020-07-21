import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Button,
} from 'react-native';
import styled from 'styled-components/native';

const LikeButton = styled.View`
  padding: 10px;
  border-radius: 5px;
  background-color: red;
`;
const styledButton = styled.Button`
  background-color: red;
`;

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, styles.myColor]}>
        <LikeButton style={styles.button}>
          <Text>Hello From App</Text>
        </LikeButton>
        <styledButton title="click me" style={styles.button} />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  button: {
    elevation: 2,
    margin: 10,
  },
  myColor: {
    backgroundColor: 'aquamarine',
  },
  container: {
    marginTop: StatusBar.currentHeight,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
});
