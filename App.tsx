import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import useStyles from './App.modules';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {screenComponents, ScreenName} from './src/util/screens';
import Nominations from './src/models/nominations';
import {getNominees, updateNominees} from './src/util/nominationsGateway';
import context from './src/util/context';
import SplashScreen from 'react-native-splash-screen';
import {theme} from './src/util/themes';

const stack = createStackNavigator();

const App = () => {
  const [nominations, setNominations] = useState<Nominations>(
    new Nominations(updateNominees),
  );
  const styles = useStyles();

  useEffect(() => SplashScreen.hide(), []);

  useEffect(() => {
    const updateNominations = async () => {
      const nominees = await getNominees();
      setNominations(
        new Nominations(newNominees => {
          updateNominees(newNominees).then(() => updateNominations());
        }, nominees),
      );
    };
    updateNominations();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <context.Provider value={{nominations: nominations}}>
        <NavigationContainer>
          <stack.Navigator
            initialRouteName={ScreenName.NOMINATIONS}
            screenOptions={{
              headerShown: false,
              cardStyle: {backgroundColor: theme.colors.backgroundColor},
            }}>
            {Object.values(ScreenName).map(name => (
              <stack.Screen
                key={name}
                name={name}
                component={screenComponents[name]}
              />
            ))}
          </stack.Navigator>
        </NavigationContainer>
      </context.Provider>
    </SafeAreaView>
  );
};

export default App;
