/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { Navigation } from './presentation/navigation/Navigation';
import 'react-native-gesture-handler';

export const App = () =>  {

  return (
    <NavigationContainer>
      <View style={{ flex: 1}}>
        <Navigation/>
      </View>
    </NavigationContainer>
  );
}


