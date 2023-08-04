import { View,StyleSheet } from 'react-native'
import { Text,Input } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react'


export default function Header() {
  return (
    <View style={styles.header}>
        <Icon name='menu' size={32} color="#000" style={styles.ico} />
        <View style={{flexDirection:"row"}}>
        <Icon name='notifications-outline' size={32} color="#000" style={styles.ico} />
        <Icon name='person-circle-outline' size={32} color="#000" style={styles.ico} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    ico:{
        marginRight:20
    }
});