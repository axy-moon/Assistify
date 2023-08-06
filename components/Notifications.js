import { Layout, Text } from '@ui-kitten/components'
import { StyleSheet } from 'react-native'
import React from 'react'
import Header from './Header'

const Notifications = () => {
  return (
    <>
    <Header/>
    <Layout style={styles.container}>
      <Text category='h5'>No New Notifications</Text>
    </Layout>
    </>
  )
}

export default Notifications

const styles = StyleSheet.create({

    container: {
        flex:1,
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
        backgroundColor:"#EEEEEE"
    },

    });