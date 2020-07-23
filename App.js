import 'react-native-gesture-handler';
import React from 'react';
import { activateKeepAwake } from 'expo-keep-awake';
import { NavigationContainer } from '@react-navigation/native';
import ColorPalette from './screens/ColorPalette';
import Home from './screens/Home';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

activateKeepAwake();

// import styled from 'styled-components/native';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ColorPalette" component={ColorPalette} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
