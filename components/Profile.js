import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Layout } from '@ui-kitten/components'
import Header from './Header'
const Profile = () => {
  return (
    <>
    <Header/>
    <Layout style={styles.container}>
      <Text>Profile</Text>
    </Layout>
    </>
  )
}

export default Profile

const styles = StyleSheet.create({

  container: {
      flex:1,
      alignContent:"center",
      backgroundColor:"#EEEEEE",
      paddingVertical:"5%",
      paddingHorizontal:"5%",

    }
});