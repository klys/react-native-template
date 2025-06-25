import { useDrawerStatus } from '@react-navigation/drawer';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Drawer } from 'react-native-paper';

import { useAppDispatch } from '../store/hooks';
import { toggleCollapse } from '../store/slices/uiSlice';

import { View } from "react-native";

const SideBar = (props) => {
  
    const dispatch = useAppDispatch();
    const [active, setActive] = useState("")
    const drawerStatus = useDrawerStatus();

    useEffect(() => {
    // Notify parent if drawer opened or closed
     dispatch(toggleCollapse())
  }, [drawerStatus]);

  return (
    <Drawer.Section 
        title=" "
        showDivider={false}
    >
      <View style={{flexDirection:"row"}} >
        <View
          style={{
            width:"32px",
            flex: 0.2
          }}
        >
          <Drawer.CollapsedItem
          focusedIcon="account"
          unfocusedIcon="account"
          label="My Account"
          theme={{
              colors: { primary:"black"}
          }}
        />
        </View>

        <View
          style={{
            width:"32px",
            flex: 0.2
          }}
        >
          <Drawer.CollapsedItem
          focusedIcon="cog-outline"
          unfocusedIcon="cog-outline"
          label="Settings"
          theme={{
              colors: { primary:"black"}
          }}
        />
        </View>

        <View
          style={{
            width:"32px",
            flex: 0.2
          }}
        >
          <Drawer.CollapsedItem
          focusedIcon="comment-multiple"
          unfocusedIcon="comment-multiple"
          label="Messages"
          theme={{
              colors: { primary:"black"}
          }}
        />
        </View>

         <View
          style={{
            width:"32px",
            flex: 0.2
          }}
        >
        <Drawer.CollapsedItem
          focusedIcon="printer"
          unfocusedIcon="printer"
          label="Printers"
          theme={{
              colors: { primary:"black"}
          }}
        />
        </View>

         

      </View>

      <View style={{flexDirection:"row"}} >

        <View
          style={{
            width:"32px",
            flex: 0.2
          }}
        >
        <Drawer.CollapsedItem
          focusedIcon="security"
          unfocusedIcon="security"
          label="System"
          theme={{
              colors: { primary:"black"}
          }}
        />
        </View>

        <View
          style={{
            width:"32px",
            flex: 0.2
          }}
        >
        <Drawer.CollapsedItem
          focusedIcon="newspaper"
          unfocusedIcon="newspaper"
          label="News"
          theme={{
              colors: { primary:"black"}
          }}
        />
        </View>

      </View>

    </Drawer.Section>
  );
};

export default SideBar;