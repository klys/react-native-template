import { useDrawerStatus } from '@react-navigation/drawer';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Drawer } from 'react-native-paper';

import { useAppDispatch } from '../store/hooks';
import { toggleCollapse } from '../store/slices/uiSlice';

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

      <Drawer.CollapsedItem
        focusedIcon="inbox"
        unfocusedIcon="inbox-outline"
        label="Inbox"
        theme={{
            colors: { primary:"black"}
        }}
       />

    </Drawer.Section>
  );
};

export default SideBar;