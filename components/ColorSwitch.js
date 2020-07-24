import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import { shadow } from '../sharedStyles/shadow';

const ColorSwitch = ({ item, addColor, removeColor }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };
  useEffect(() => {
    if (isEnabled) {
      addColor(item);
    } else {
      removeColor(item);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEnabled]);

  return (
    <View style={styles.container}>
      <View style={styles.colorContainer}>
        <View style={[styles.minicolor, { backgroundColor: item.hexCode }]} />
        <Text>{item.colorName}</Text>
      </View>
      <Switch onValueChange={toggleSwitch} value={isEnabled} />
    </View>
  );
};

export default ColorSwitch;

const styles = StyleSheet.create({
  minicolor: {
    ...shadow,
    height: 25,
    width: 25,
    borderRadius: 5,
    marginEnd: 5,
  },
  colorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 5,
    borderBottomColor: 'lavender',
    borderBottomWidth: 2,
    padding: 5,
  },
});
