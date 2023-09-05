import React, { useState } from 'react'
import { View,  StyleSheet } from 'react-native'
import { List, ListItem, Text, } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Ionicons';


import data from "../../roll.json"

const StudentsList = () => {
  const [present,setPresent] = useState(false)

  const attendance = () => {
      console.log("function")
  }

  const PresentIcon = () => (
    <Icon name="checkmark-circle" onPress={attendance} size={26} color="#1F883D" />

 );

 const Head = () => {
    <Text category='h1'>Header</Text>
 }

 const AbsentIcon = () => {
  <Icon name="close" size={26} color="#B31312" />
 };
    
  const renderItem = ({ item }) => (
    <ListItem
      title={`${item.rollno}`}
      description={`${item.name}`}
      style={[styles.names,styles.shadowProp]}
      accessoryRight={AbsentIcon}
    />
  );

  return (
    <List
      style={styles.container}
      data={data}
      renderItem={renderItem}
      ListHeaderComponent={Head}
    />
  )
}

export default StudentsList

const styles = StyleSheet.create({
  container: {
    padding:16,
    backgroundColor:"#fff",
  },
  names:{
    marginVertical:2,
    borderRadius:6,
    padding:2,
    backgroundColor:"#F5F5F5"
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
