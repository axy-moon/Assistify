import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Layout, Text } from '@ui-kitten/components'
import Header from './Header'
import { MenuList } from './commonComponents/MenuList'
const Profile = () => {
  return (
    <>
    <Header/>
    <Layout style={styles.container}>
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Image source = {require('../assets/av.jpg')} style={styles.avatar} />
      </View>
      <Text category='h1' style={{textAlign:"center"}}>22MX108</Text>
      <Text category='h5' style={{textAlign:"center",marginVertical:16}}>Augxy Moon SM</Text>

      <MenuList/>
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

    },
    avatar: {
      width:270,
      height:270,
      borderRadius:999
    },
});