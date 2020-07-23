import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const PaletteModal = () => {
  return (
    <View>
      <TextInput placeholder="type your palette" />
    </View>
  );
};

export default PaletteModal;

const styles = StyleSheet.create({});
