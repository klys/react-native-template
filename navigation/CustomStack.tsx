import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Appbar } from 'react-native-paper';

import DetailsScreen from '../screens/(tabs)/explore';
import HomeScreen from '../screens/(tabs)/index';
import { useAppSelector } from '../store/hooks';
import GlobalLayout from './GlobalLayout';
import SideBar from './SideBar';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const withLayout = (Component, options?) => {
  return (props) => (
    <GlobalLayout {...options?.layout}>
      <Component {...props} />
    </GlobalLayout>
  );
};

function StackScreens() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ navigation, route, options, back }) => {
          const title = options?.headerTitle ?? options?.title ?? route.name;
          const drawerNavigation = navigation.getParent();
          return (
            <Appbar.Header>
              {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
              <Appbar.Content title={title} />
              <Appbar.Action icon="calendar" onPress={() => {}} />
              <Appbar.Action icon="magnify" onPress={() => {}} />
              <Appbar.Action 
                icon="apps"  
                onPress={() => {
                  if (drawerNavigation) {
                    drawerNavigation.openDrawer();
                  }
                }} />
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
  );
}

export default function CustomStack() {

  const collapsed = useAppSelector((state) => state.ui.collapsed);
  // state.ui.collapsed
   const drawerWidth = collapsed ? 0 : 80
  return (
    <Drawer.Navigator 
      drawerContent={(props) => <SideBar {...props} />}
      screenOptions={{
        drawerStyle: {
          width: drawerWidth,
        },
      }}
    >
      <Drawer.Screen
        name="Main"
        component={StackScreens}
        options={{ headerShown: false }} // stack manages its own headers
      />
    </Drawer.Navigator>
  );
}
