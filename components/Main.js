import { View,StyleSheet, FlatList, Image } from 'react-native'
import React , { useEffect,useState,useRef, } from 'react';
import { Text,Card,CircularProgressBar,Input, Layout,Button } from '@ui-kitten/components'
import TaskList from './TaskList';
import { List } from '@ui-kitten/components';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import SquareButton from './commonComponents/SquareButton';
import Header from './Header';
import Icon from 'react-native-vector-icons/Ionicons';
import { FIRESTORE_DB } from '../firebase/firebase';
import { addDoc, collection, deleteDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import FlatListBasic from './commonComponents/FlatListBasic';
import { DrawerLayoutAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Welcome = () => {
    const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('left');
  const [drawerState,setDrawerState] = useState(false) 

  const drawerOpen = () => {
    if (drawerState) {
        drawer.current.closeDrawer()
        setDrawerState(!drawerState)
    }

    else {
        drawer.current.openDrawer()
        setDrawerState(!drawerState)

    }
  }

  const navigationView = () => (
    <View style={{height:"100%",backgroundColor:"#EEEEEE"}}>
    <View style={[styles.containers, styles.navigationContainer]}>
        <Text style={{textAlign:"left"}}>Configurations</Text>
    </View>
    <View style={[styles.containers, styles.navigationContainer]}>
        <Text style={{textAlign:"left"}}>Setup New Semester</Text>
    </View>
    <View style={[styles.containers, styles.navigationContainer]}>
        <Text style={{textAlign:"left"}}>Change Administration</Text>
    </View>

    </View>
  );
  
  const navigation = useNavigation();
  
  const profileIcon = () => {
    navigation.navigate('Profile')
  }

  const bellIcon = () => {
    navigation.navigate('Notifications')
  }
  
    var day;
    function getDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        day = days[today.getDay()];
        return `${date}/${month}/${year}`;
      }
      
      
      var d = getDate()



    return(
        <>
         <View style={styles.header}>
                <Icon name='menu' size={32} color="#000" style={styles.ico} onPress={drawerOpen} />
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
          

        <View style={styles.container}>
            <Text category='h1' style={{marginVertical:30}}>Home</Text>
            <Card style={[styles.cards,styles.shadowProp]}>
                <View style={{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                    <View style={{width:"30%"}}>
                        <Image source={require('../assets/graduates.png')} style={{width:100,height:100}} />
                        <Text style={{color:"#fff",padding:2,margin:5,textAlign:"center"}} category='h6'>2nd Year MCA</Text>
                    </View>
                
                    <View style={{width:"60%",alignItems:"center",justifyContent:"center"}}>
                        <Text style={{color:"#fff",fontSize:24,fontWeight:800}}>{d}</Text>
                        <Text style={{color:"#fff",alignItems:"flex-end",fontWeight:700,marginBottom:10}}>{day}</Text>
                    <Button style={{backgroundColor:"#64CCC5",borderWidth:0}} onPress={()=>navigation.navigate('Dashboard')}>View Dashboard</Button>
                    </View>
                </View>
            </Card>
            
            <View style={styles.btncontainer}>
                <SquareButton onPress={()=>navigation.navigate('Details')} title="Attendance" iname="users" cl="#FF6666"  />
                <SquareButton title="Calendar" iname="calendar" cl="#9681EB" />
            </View>

            <View style={styles.btncontainer}>
                <SquareButton title="Broadcast" onPress={()=>navigation.navigate('Chat')} iname="podcast" cl="#3AA6B9" />
                <SquareButton title="Tasks" onPress={()=>navigation.navigate('Todo')} iname="check" cl="#FFA41B" />
            </View>
        
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                <Text category='h3' style={{marginVertical:10}}>Today's Absentees</Text>
                <Text>See all</Text>
            </View>
            <FlatListBasic/>
        </View>
        </DrawerLayoutAndroid>

        </>
    );
}

export default Welcome

const styles = StyleSheet.create({
        container: {
            flex:1,
            alignContent:"center",
            marginHorizontal:"5%",
            backgroundColor:"#EEEEEE"
        },

        cards:{
            borderRadius:10,
            marginBottom:30,
            backgroundColor: "#176B87",
            display:"flex",
            flexWrap:"wrap"
        },
        shadowProp: {
            shadowColor: '#171717',
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3,
          },
          input:{
            borderRadius:25,
            height:80,
          },
          bar: {
            margin:30,
            marginLeft:80
          },
          Adetails: {
            display:"flex",
            flexDirection:"row",
          },
          btncontainer: {
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-around",
            marginBottom:20
          },
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
        containers: {
          justifyContent: 'center',
          padding: 16,
        },
        navigationContainer: {
          backgroundColor: '#ecf0f1',
        },
});