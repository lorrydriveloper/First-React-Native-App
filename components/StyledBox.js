import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { shadow } from '../sharedStyles/shadow';

const StyledBox = ({ hexCode, colorName }) => {
  const styles = StyleSheet.create({
    container: {
      ...shadow,
      backgroundColor: hexCode,
      marginTop: 15,
      padding: 15,
      alignItems: 'center',
    },
    text: {
      color:
        // return false if color close to the 10% of the white spectre
        parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.15
          ? '#000'
          : '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{colorName + ' ' + hexCode}</Text>
    </View>
  );
};

export default StyledBox;
