import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './Type/StackNavigation';
import {StatusBar} from 'react-native';

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <StackNavigation />
    </NavigationContainer>
  );
}
