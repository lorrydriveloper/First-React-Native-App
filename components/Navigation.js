import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';

const PalettePreview = ({ palette, handlePress }) => {
  const { colors, paletteName } = palette;
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.text}>{paletteName}</Text>
        <FlatList
          horizontal={true}
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
    height: 50,
    width: 50,
    marginLeft: 5,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  card: {
    backgroundColor: '#fef',
    marginBottom: 10,
    borderRadius: 5,
    padding: 10,
    elevation: 3,
  },
});
