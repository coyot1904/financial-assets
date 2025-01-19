import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/Screens/HomeScreen';
import AssetScreen from './src/Screens/AssetScreen';

import {RootStackParamList} from './src/Types/RootStackParamList';

const Stack = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Asset" component={AssetScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
