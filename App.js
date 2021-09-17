import React, { useEffect } from 'react';
import MainNavigation from './navigation/MainNavigation';
// import MenuNavigation from './navigation/MainNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import SplashScreen from  "react-native-splash-screen";

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  })

  return (
    <SafeAreaProvider>
      <MainNavigation />
      {/* <MenuNavigation /> */}
    </SafeAreaProvider>
  );
};

export default App;
