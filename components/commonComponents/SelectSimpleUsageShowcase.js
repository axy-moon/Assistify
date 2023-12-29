import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components';

const SelectSimpleUsageShowcase = () => {

  return (
    <Layout style={styles.container} level='1'>
      <Select>
        <SelectItem title='Option 1' />
        <SelectItem title='Option 2' />
        <SelectItem title='Option 3' />
      </Select>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 128,
  },
});

export default SelectSimpleUsageShowcase;