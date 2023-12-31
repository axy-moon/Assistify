import { View,StyleSheet } from 'react-native'
import { Text,Input } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react'
import { useNavigation } from '@react-navigation/native';



export default function Header() {
  const navigation = useNavigation();
  
  const profileIcon = () => {
    navigation.navigate('Profile')
  }

  const bellIcon = () => {
    navigation.navigate('Notifications')
  }

  return (
    <View style={styles.header}>
        <Icon name='menu' size={32} color="#000" style={styles.ico} />
        <View style={{flexDirection:"row"}}>
        <Icon name='notifications-outline' onPress={bellIcon} size={32} color="#000" style={styles.ico} />
        <Icon onPress={profileIcon} name='person-circle-outline' size={32} color="#000" style={styles.ico} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginHorizontal:"2%",
        backgroundColor:"#EEEEEE",
        marginTop:50
      },
    ico:{
        marginRight:10
    }
});