import React, {useEffect, useState} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import StackNavigator from './src/navigators/StackNavigator';
import {
  Provider,
  MD3LightTheme,
  adaptNavigationTheme,
} from 'react-native-paper';
// getting version
import packageJson from './package.json';
import SplashScreen from './src/pages/splash-screen';
const {LightTheme} = adaptNavigationTheme({reactNavigationLight: DefaultTheme});

function App(): JSX.Element {
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  /**
   * @description set timer for splash screen
   */
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 5000);
  }, []);

  if (isLoading) return <SplashScreen />;

  return (
    <Provider theme={MD3LightTheme}>
      <NavigationContainer theme={LightTheme}>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
