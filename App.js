import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home';
import MeteorScreen from './screens/Meteor';
import ISSLocationScreen from './screens/ISSLocation';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home' 
        screenOptions={{headerShown: false}}>
          <Stack.Screen name='Home' component={HomeScreen}/>
          <Stack.Screen name='ISSLocation' component={ISSLocationScreen}/>
          <Stack.Screen name='Meteor' component={MeteorScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
