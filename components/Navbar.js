import React from 'react';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import { useState } from 'react';



const Navbar = ({ selectedIndex, onSelect }) => {
  return (
    <BottomNavigation selectedIndex={selectedIndex}
    onSelect={index => setSelectedIndex(index)}>
      <BottomNavigationTab title="Home" />
      <BottomNavigationTab title="Explore" />
      <BottomNavigationTab title="Profile" />
    </BottomNavigation>
  );
};

export default Navbar;