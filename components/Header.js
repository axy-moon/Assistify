import { View,StyleSheet } from 'react-native'
import { Text,Input } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import React, {useRef, useState} from 'react';


export default function Header() {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('left');

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );
  
  const navigation = useNavigation();
  
  const profileIcon = () => {
    navigation.navigate('Profile')
  }

  const bellIcon = () => {
    navigation.navigate('Notifications')
  }
  

  return (
    <>
       
        
        <View style={styles.header}>
        <Icon name='menu' size={32} color="#000" style={styles.ico} onPress={() => drawer.current.openDrawer()} />
        <View style={{flexDirection:"row"}}>
        <Icon name='notifications-outline' onPress={bellIcon} size={32} color="#000" style={styles.ico} />
        <Icon onPress={profileIcon} name='person-circle-outline' size={32} color="#000" style={styles.ico} />
        </View>
    </View>
     <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={drawerPosition}
        renderNavigationView={navigationView}>
          

        </DrawerLayoutAndroid>
   
    </>

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
    },
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
    },
    navigationContainer: {
      backgroundColor: '#ecf0f1',
      borderWidth:2
    },
});