import React from 'react';
import { Button, List, ListItem } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const data = new Array(8).fill({
  title: 'Title for Item',
  description: 'Description for Item',
});

const TaskList = () => {
  const renderItemAccessory = () => (
     <Icon name="ellipse-outline" size={32} color="#000" />
  );

  const renderItemIcon = (props) => {
    <Icon
      {...props}
      name='person'
    /> }

  const renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.title} ${index + 1}`}
      description={`${item.description} ${index + 1}`}
      accessoryRight={renderItemAccessory}
      accessoryLeft={renderItemIcon}
    />
  );

  return (
    <List
      style={styles.container}
      data={data}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding:20,
    backgroundColor:"#fff",
    maxHeight: 400,
  },
});

export default TaskList