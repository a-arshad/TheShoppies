import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import useStyles from './App.modules';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {screenComponents, ScreenName} from './src/util/screens';
import Nominations from './src/models/nominations';
import {getNominees, updateNominees} from './src/util/nominationsGateway';
import context from './src/util/context';

const stack = createStackNavigator();

const App = () => {
  const [nominations, setNominations] = useState<Nominations>(
    new Nominations(updateNominees),
  );
  const styles = useStyles();

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
    <SafeAreaView style={styles.theme}>
      <context.Provider value={{nominations: nominations}}>
        <NavigationContainer>
          <stack.Navigator
            initialRouteName={ScreenName.NOMINATIONS}
            screenOptions={{headerShown: false}}>
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
