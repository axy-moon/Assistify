import React, { useState } from 'react'
import { View,  StyleSheet } from 'react-native'
import { List, ListItem, Text, } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Ionicons';


import data from "../../roll.json"

const StudentsList = () => {
  const [present,setPresent] = useState(true)

  const attendance = (e) => {
      console.log(e)
  }

  const PresentIcon = () => {

    if(present) {
      return <Icon name="checkmark-circle" size={26} color="#1F883D" />
    
    }
    else {
      return <Icon name="close-circle" size={26} color="#FF0000" />
    };
  }


 const Head = () => {
    <Text category='h1'>Header</Text>
 }

    
  const renderItem = ({ item }) => (
    <ListItem
      title={`${item.rollno}`}
      description={`${item.name}`}
      style={[styles.names,styles.shadowProp]}
      accessoryRight={PresentIcon}
      onPress={attendance(item.rollno)}
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
    maxHeight:"85%"
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
