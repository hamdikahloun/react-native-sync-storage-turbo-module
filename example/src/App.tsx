import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SaveDataScreen } from './SaveDataScreen';
import { ReadDataScreen } from './ReadDataScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SaveDataScreen" component={SaveDataScreen} />
        <Stack.Screen name="ReadDataScreen" component={ReadDataScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
