import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('ColorPalette')}>
        <Text>Hello World</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
