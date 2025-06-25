// App.tsx
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useColorScheme } from 'react-native';
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from 'react-native-paper';

import CustomStack from './navigation/CustomStack';

import { Provider } from 'react-redux';
import { store } from './store';

export default function App() {
    
  const colorScheme = useColorScheme();

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
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <CustomStack />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
