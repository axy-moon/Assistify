import { View,StyleSheet, FlatList, Image } from 'react-native'
import React , { useEffect } from 'react';
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

const Welcome = ({navigation}) => {



    return(
        <>
        <Header/>
        <View style={styles.container}>
            <Text category='h1' style={{marginVertical:30}}>Home</Text>
            <Card style={[styles.cards,styles.shadowProp]}>
                <View style={{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                    <View style={{width:"30%"}}>
                        <Image source={require('../assets/graduates.png')} style={{width:100,height:100}} />
                        <Text style={{color:"#fff",padding:2,margin:5,textAlign:"center"}} category='h6'>2nd Year MCA</Text>
                    </View>
                
                    <View style={{width:"60%",alignItems:"center",justifyContent:"center"}}>
                        <Text style={{color:"#fff"}}>Date : 28-12-2023</Text>
                        <Text style={{color:"#fff"}}>Day : Thursday</Text>
                        <Text style={{color:"#fff",fontWeight:700}}>Total Strength : 60</Text>
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
        header:{
            borderWidth:2
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
          }
});