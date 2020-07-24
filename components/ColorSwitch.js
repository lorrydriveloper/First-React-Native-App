import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Switch } from 'react-native-gesture-handler';

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
  }, [addColor, isEnabled, item, removeColor]);

  return (
    <View>
      <Text>{item.colorName}</Text>
      <Switch onValueChange={toggleSwitch} value={isEnabled} />
    </View>
  );
};

export default ColorSwitch;

const styles = StyleSheet.create({});
