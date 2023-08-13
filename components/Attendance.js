import { View,  StyleSheet } from 'react-native'
import React from 'react'
import StudentsList from './commonComponents/StudentsList'
import { Text, Layout } from '@ui-kitten/components'

const AttendanceScreen = () => {
  return (
    <Layout style={styles.container}>
      <Text category="h3">Attendance</Text>
      <StudentsList/>
    </Layout>
  )
}

export default AttendanceScreen;

const styles = StyleSheet.create({
  container: {
    marginTop:60,
  },
});
