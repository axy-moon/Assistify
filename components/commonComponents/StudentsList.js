import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { List, ListItem } from '@ui-kitten/components';

const StudentsList = () => {
    const renderItem = ({ item, index }: { item: { title: string }; index: number }): React.ReactElement => (
        <ListItem title={`${item.title} ${index + 1}`} />
      );
  return (
    <List
      style={styles.container}
      data={data}
      renderItem={renderItem}
    />
  )
}

export default StudentsList