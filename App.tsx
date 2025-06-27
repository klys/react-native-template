// App.tsx
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import ImmersiveMode from 'react-native-immersive';
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from 'react-native-paper';

import CustomStack from './navigation/CustomStack';

import { Provider } from 'react-redux';
import { store } from './store';

export default function App() {
    
  const colorScheme = useColorScheme();

  useEffect(() => {
    ImmersiveMode.fullLayout(true);     // Enable full layout
    ImmersiveMode.setBarMode('BottomSticky'); // Or 'Normal', 'StickyImmersive'
  }, []);

  const lightTheme = {
    ...MD3LightTheme,
    colors: {
      ...MD3LightTheme.colors,
      //primary: '#6200EE',
      //accent: '#03DAC4',
    },
  };

  const darkTheme = {
    ...MD3DarkTheme,
    colors: {
      ...MD3DarkTheme.colors,
      //primary: '#BB86FC',
      //accent: '#03DAC6',
    },
  };

  const theme = lightTheme;//colorScheme === 'dark' ? darkTheme : lightTheme;

  return (
     <Provider store={store}>
      <StatusBar hidden={true} />
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <CustomStack />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
