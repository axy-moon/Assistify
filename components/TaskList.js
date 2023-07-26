import React from 'react';
import { Button, Icon, List, ListItem } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

const data = new Array(8).fill({
  title: 'Title for Item',
  description: 'Description for Item',
});

const TaskList = () => {
  const renderItemAccessory = () => (
    <Button size='tiny'>
      FOLLOW
    </Button>
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
    maxHeight: 400,
  },
});

export default TaskList