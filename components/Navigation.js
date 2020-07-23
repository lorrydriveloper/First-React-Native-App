import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import { shadow } from '../sharedStyles/shadow';

const PalettePreview = ({ palette, handlePress }) => {
  const { colors, paletteName } = palette;
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.text}>{paletteName}</Text>
        <FlatList
          // style={styles.list}
          horizontal={true} //    Shadows doesn't show use flex instead
          data={colors.slice(0, 5)}
          keyExtractor={item => item.hexCode}
          renderItem={({ item }) => (
            <View style={[styles.preview, { backgroundColor: item.hexCode }]} />
          )}
        />
      </TouchableOpacity>
    </View>
  );
};

export default PalettePreview;

const styles = StyleSheet.create({
  preview: {
    ...shadow,
    height: 50,
    width: 50,
    marginLeft: 5,
    borderRadius: 5,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  card: {
    ...shadow,
    backgroundColor: '#fef',
    marginBottom: 10,
    borderRadius: 5,
    padding: 10,
  },
  list: {
    flexDirection: 'row',
    backgroundColor: 'red',
  },
});
