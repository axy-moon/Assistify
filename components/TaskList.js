import React from 'react';
import { Button, List, ListItem } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const data = new Array(8).fill({
  title: 'Task',
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
    padding:16,
    backgroundColor:"#fff",
    maxHeight: 400,
  },
});

export default TaskList