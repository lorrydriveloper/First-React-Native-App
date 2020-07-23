import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
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
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Flatiron CheatSheet',
            headerStyle: {
              backgroundColor: 'red',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign: 'center',
            },
          }}
        />
        <Stack.Screen
          name="ColorPalette"
          component={ColorPalette}
          options={({ route }) => ({
            title: route.params.paletteName,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
