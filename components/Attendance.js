import { View,  StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import StudentsList from './commonComponents/StudentsList'
import { Text, Layout, Button } from '@ui-kitten/components'
import SubjectPicker from './commonComponents/SubjectPicker'


const AttendanceScreen = ({ subject }) => {
  
  return (

    <Layout style={styles.container}>
      <Text category="h3" style={{paddingHorizontal:10}}>Attendance</Text>
      <Text category="p1" style={{padding:10}}>Subject : {subject}</Text>

      
       <StudentsList subject={subject}/>    
       
    </Layout>
  )
}

export default AttendanceScreen;

const styles = StyleSheet.create({
  container: {
    marginTop:60,
    marginBottom:20,
    display:"flex",
    justifyContent: "space-between",
    height:"95%"
  },
});
