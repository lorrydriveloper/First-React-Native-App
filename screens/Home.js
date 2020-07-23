import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, RefreshControl } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import PalettePreview from '../components/Navigation';

const Home = ({ navigation }) => {
  const [palette, setPalette] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await handleFetch();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 2000);
  }, []);

  const handleFetch = useCallback(async () => {
    const result = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );
    if (result.ok) {
      const paletteArray = await result.json();
      setPalette(paletteArray);
    } else {
      // eslint-disable-next-line no-alert
      alert('sorry and Error has ocurred');
    }
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
      // refreshing={isRefreshing}
      // onRefresh={handleRefresh}
      // not working for me????
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
      }
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
