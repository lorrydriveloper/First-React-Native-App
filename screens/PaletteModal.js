import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';
import { TextInput, FlatList } from 'react-native-gesture-handler';
import COLORS from '../data/colors';
import ColorSwitch from '../components/ColorSwitch';

const PaletteModal = ({ navigation }) => {
  const [newPalette, setNewPalette] = useState({
    paletteName: '',
    colors: [],
  });

  const addColor = useCallback(object => {
    setNewPalette(prevState => ({
      ...prevState,
      colors: [...prevState.colors, object],
    }));
  }, []);

  const handleSubmit = () => {
    if (newPalette.paletteName === '' || newPalette.colors.length < 3) {
      Alert.alert('complete your new Palette');
    } else {
      navigation.navigate('Home', { newPalette });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  const removeColor = object => {
    setNewPalette(prevState => ({
      ...prevState,
      colors: prevState.colors.filter(
        color => color.colorName !== object.colorName,
      ),
    }));
  };

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
      <Button onPress={handleSubmit} title="submit" />
      {/* <TouchableOpacity onPress={() => handleSubmit()}>
        <Text>Submit</Text>
      </TouchableOpacity> */}
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
