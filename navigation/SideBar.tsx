import * as React from 'react';
import { useState } from 'react';
import { Drawer } from 'react-native-paper';

const SideBar = (props) => {
  
    const [active, setActive] = useState("")
  return (
    <Drawer.Section 
        title=" "
        showDivider={false}
    >

      <Drawer.CollapsedItem
        focusedIcon="inbox"
        unfocusedIcon="inbox-outline"
        label="Inbox"
       />

    </Drawer.Section>
  );
};

export default SideBar;