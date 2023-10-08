import React from 'react';
import { IndexPath, Menu, MenuItem } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';

export const MenuList = () => {

  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const navigation = useNavigation()
  const logout = () => {
    navigation.navigate("Login")
  }

  return (
    <Menu
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}
    >
      <MenuItem title='Access Control' />
      <MenuItem title='Report a Bug' />
      <MenuItem title='Reset Semester'/>
      <MenuItem title='Settings' />
      <MenuItem title='Logout' onPress={logout} />
    </Menu>
  );
};