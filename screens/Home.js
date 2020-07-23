import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import PalettePreview from '../components/Navigation';

const Home = ({ navigation }) => {
  const [palette, setPalette] = useState([]);

  const handleFetch = useCallback(async () => {
    const data = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );
    const paletteArray = await data.json();
    setPalette(paletteArray);
  }, []);

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <FlatList
      style={styles.list}
      data={palette}
      keyExtractor={item => item.paletteName}
      renderItem={({ item }) => (
        <PalettePreview
          palette={item}
          handlePress={() => navigation.navigate('ColorPalette', item)}
        />
      )}
    />
  );
};

export default Home;

const styles = StyleSheet.create({
  list: {
    padding: 15,
    backgroundColor: 'white',
  },
});
