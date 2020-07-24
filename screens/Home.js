import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, RefreshControl, Text } from 'react-native';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';
import PalettePreview from '../components/Navigation';
import { shadow } from '../sharedStyles/shadow';

const Home = ({ navigation, route }) => {
  const [palette, setPalette] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const newPallete = route.params ? route.params.newPalette : undefined;

  useEffect(() => {
    if (newPallete) {
      setPalette(prev => [newPallete, ...prev]);
    }
  }, [newPallete]);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await handleFetch();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 2000);
  }, [handleFetch]);

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
  }, [handleFetch]);

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
      ListHeaderComponent={
        <TouchableHighlight
          onPress={() => navigation.navigate('PaletteModal')}
          style={styles.button}
        >
          <Text>Add new Pallete</Text>
        </TouchableHighlight>
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
  button: {
    ...shadow,
    borderRadius: 5,
    height: 35,
    width: 150,
    backgroundColor: 'aliceblue',
    marginBottom: 10,
    padding: 5,
    alignItems: 'center',
  },
});
