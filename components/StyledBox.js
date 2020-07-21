import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const StyledBox = ({ hexCode, colorName }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: hexCode,
      marginTop: 15,
      padding: 15,
      alignItems: 'center',
    },
    text: {
      color: '#fff',
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
