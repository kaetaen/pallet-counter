import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Counter from './pages/Counter/'
import Start from './pages/Start/'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen
          name="Inicio"
          component={Start}
          options={{
            headerStyle: {
              backgroundColor: '#FF4500',
            },
            headerTintColor: '#f8f8f2'
          }}
        />
        <Stack.Screen name="Contador" component={Counter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
