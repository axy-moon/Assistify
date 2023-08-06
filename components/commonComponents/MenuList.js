import React from 'react';
import { IndexPath, Menu, MenuItem } from '@ui-kitten/components';

export const MenuList = () => {

  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));

  return (
    <Menu
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}
    >
      <MenuItem title='Access Control' />
      <MenuItem title='Change Theme'/>
      <MenuItem title='Report' />
      <MenuItem title='Settings' />
      <MenuItem title='Logout' />

    </Menu>
  );
};