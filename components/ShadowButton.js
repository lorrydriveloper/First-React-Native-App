import React from 'react';
import { StyleSheet, TouchableHighlight, Text } from 'react-native';
import { BoxShadow } from 'react-native-shadow';

const ShadowButton = (props) => {
  const shadowOpt = {
    width: 160,
    height: 170,
    color: '#000',
    border: 2,
    radius: 3,
    opacity: 0.2,
    x: 0,
    y: 3,
    style: { marginVertical: 5 },
  };
  return (
    <BoxShadow>
      <TouchableHighlight style={styles.button}>
        <Text>Hola</Text>
      </TouchableHighlight>
    </BoxShadow>
  );
};

export default ShadowButton;

const styles = StyleSheet.create({
  button: {
    position: 'relative',
    width: 160,
    height: 170,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
});
