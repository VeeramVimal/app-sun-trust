import React, { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from "./src/navigators/StackNavigator";
// getting version
import packageJson from './package.json';
import SplashScreen from './src/pages/splash-screen';
function App(): JSX.Element {
const [isLoading, setIsLoading] = useState<Boolean>(true);

/**
 * @description set timer for splash screen
 */
useEffect(() => {
  setTimeout(() => {
    setIsLoading(!isLoading);
  }, 5000)
}, [])

if(isLoading) return <SplashScreen/>;

  return (
    <NavigationContainer>
        <StackNavigator/>
    </NavigationContainer>
  );
}



export default App;
