import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const StyledBox = (props) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: props.value,
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
      <Text style={styles.text}>{props.color + ' ' + props.value}</Text>
    </View>
  );
};

export default StyledBox;
