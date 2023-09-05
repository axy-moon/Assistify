import { View,  StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import StudentsList from './commonComponents/StudentsList'
import { Text, Layout, Button } from '@ui-kitten/components'
import SubjectPicker from './commonComponents/SubjectPicker'

const AttendanceScreen = () => {
  return (

    <Layout style={styles.container}>
      <Text category="h3">Attendance</Text>
      <SubjectPicker/>
       <StudentsList/>    
        <Layout style={{display:"flex",justifyContent:"space-around",flexDirection:"row",marginBottom:20}}>
          <Button>Discard</Button>
          <Button>Submit</Button>
          <Button>Save</Button>  

      </Layout>
    </Layout>
  )
}

export default AttendanceScreen;

const styles = StyleSheet.create({
  container: {
    marginTop:60,
  },
});
