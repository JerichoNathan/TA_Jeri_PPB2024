import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import MainContainer from './navigation/MainContainer.js';
import DetailScreen from './screens/DetailScreen.js';

const StackNavigator = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator>
        <StackNavigator.Screen
          name="Main" component={MainContainer} options={{ headerShown: false }}
        />
        <StackNavigator.Screen
          name="Detail" component={DetailScreen} options={{ headerShown: false }}
        />
      </StackNavigator.Navigator>
    </NavigationContainer>

  );
}

export default App;