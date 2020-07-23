import React from 'react';
import { StyleSheet } from 'react-native';
import StyledBox from '../components/StyledBox';
import { FlatList } from 'react-native-gesture-handler';

const ColorPalette = ({ route }) => {
  const { colors } = route.params;
  return (
    <FlatList
      data={colors}
      keyExtractor={item => item.hexCode}
      renderItem={({ item }) => (
        <StyledBox colorName={item.colorName} hexCode={item.hexCode} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ColorPalette;
