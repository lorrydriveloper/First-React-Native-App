import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import COLORS from '../data/colors';
import ColorSwitch from '../components/ColorSwitch';

const PaletteModal = () => {
  const [newPalette, setNewPalette] = useState({
    paletteName: '',
    colors: [],
  });

  const addColor = object => {
    setNewPalette(prevState => ({
      ...prevState,
      colors: [...prevState.colors, object],
    }));
  };
  const handleSubmit = () => {
    alert('hello');
  };
  const removeColor = () => {};

  return (
    <View style={styles.container}>
      <Text>Name your color palette</Text>
      <TextInput
        style={styles.input}
        placeholder="Give me a super name!!!"
        placeholderTextColor="black"
        onChangeText={text =>
          setNewPalette(prevState => ({
            ...prevState,
            paletteName: text,
          }))
        }
      />
      <FlatList
        style={styles.colorList}
        data={COLORS}
        keyExtractor={item => item.hexCode + item.colorName}
        renderItem={({ item }) => (
          <ColorSwitch
            addColor={addColor}
            removeColor={removeColor}
            item={item}
          />
        )}
      />
      {/* <Button onPress={handleSubmit} title="submit" /> */}
      <TouchableOpacity onPress={() => handleSubmit()}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaletteModal;

const styles = StyleSheet.create({
  input: {
    borderBottomColor: 'blue',
    borderBottomWidth: 2,
    backgroundColor: 'gainsboro',
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 5,
  },
  container: {
    padding: 10,
    backgroundColor: '#fff',
  },
  minibox: {
    borderRadius: 5,
    height: 15,
    width: 15,
  },
  colorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  colorList: {
    height: 600,
  },
});
