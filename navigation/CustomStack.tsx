// MyStack.js or wherever you define your stack navigator
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Appbar } from 'react-native-paper';
import DetailsScreen from "../screens/(tabs)/explore";
import HomeScreen from '../screens/(tabs)/index';
import GlobalLayout from './GlobalLayout';

const Stack = createNativeStackNavigator();

const withLayout = (Component) => {
  return (props) => (
    <GlobalLayout>
      <Component {...props} />
    </GlobalLayout>
  );
};



function CustomStack() {

  return (
    <>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: ({ navigation, route, options, back }) => {
          const title = options.headerTitle ?? options.title ?? route.name;

          return (
            <Appbar.Header>
              {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
              <Appbar.Content title={title} />
              {/* Add other actions if needed */}
              {/* <Appbar.Action icon="magnify" onPress={() => {}} /> */}
              <Appbar.Action icon="calendar" onPress={() => {}} />
              <Appbar.Action icon="magnify" onPress={() => {}} />
            </Appbar.Header>
          );
        },
      }}
    >
      
      <Stack.Screen 
        name="Home" 
        component={withLayout(HomeScreen)} 
        options={{ title: 'Rally Point App' }} 
      />
      <Stack.Screen 
        name="Details" 
        component={withLayout(DetailsScreen)} 
        options={{ title: 'Details' }}  
      />
    </Stack.Navigator>

    </>
  );
}

export default CustomStack;