import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { activateKeepAwake } from 'expo-keep-awake';
import { NavigationContainer } from '@react-navigation/native';
import ColorPalette from './screens/ColorPalette';
import Home from './screens/Home';
import { createStackNavigator } from '@react-navigation/stack';
import PaletteModal from './screens/PaletteModal';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

activateKeepAwake();

// import styled from 'styled-components/native';
const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Palette Color',
          headerStyle: {
            backgroundColor: 'teal',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
      />
      <MainStack.Screen
        name="ColorPalette"
        component={ColorPalette}
        options={({ route }) => ({ title: route.params.paletteName })}
      />
    </MainStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen name="PaletteModal" component={PaletteModal} />
      </RootStack.Navigator>

      {/* <RootStack.Navigator>
        <RootStack.Screen
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
        <RootStack.Screen
          name="ColorPalette"
          component={ColorPalette}
          options={({ route }) => ({
            title: route.params.paletteName,
          })}
        />
      </RootStack.Navigator> */}
    </NavigationContainer>
  );
};

export default App;
