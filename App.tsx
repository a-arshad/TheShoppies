import React from 'react';
import {SafeAreaView} from 'react-native';
import SearchScreenController from './src/screens/Search/SearchScreenController';
import useStyles from './App.modules';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NominationsScreenController from './src/screens/Nominations/NominationsScreenController';
import {screenComponents, ScreenName} from './src/util/screens';

const Stack = createStackNavigator();

const App = () => {
  const styles = useStyles();

  return (
    <SafeAreaView style={styles.theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={ScreenName.NOMINATIONS}
          screenOptions={{headerShown: false}}>
          {Object.values(ScreenName).map(name => (
            <Stack.Screen key={name} name={name} component={screenComponents[name]} />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
