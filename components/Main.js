import { View,StyleSheet } from 'react-native'
import React from 'react';
import { Text,Card,CircularProgressBar,Input, Layout,Button } from '@ui-kitten/components'
import TaskList from './TaskList';
import { List } from '@ui-kitten/components';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import SquareButton from './commonComponents/SquareButton';
import Header from './Header';


const Welcome = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Header/>
            <Layout style={styles.layouts}>
            <Text category='h1' style={styles.header}>Hi Santhosh</Text>
    
    
            <Card style={[styles.cards,styles.shadowProp]}>
                <Text category='h4'>
                    Attendance
                </Text>
                <View style={styles.Adetails}>
                    <View style={{paddingVertical:26}}>
                        <Text category='h6'>No of Presentees: 41</Text>
                        <Text category='h6'>No of Absentees: 19</Text>
                    </View>
                    <CircularProgressBar progress={0.68} style={styles.bar} />
                </View>
            </Card>
    <View style={styles.btncontainer}>
        <SquareButton onPress={()=>navigation.navigate('sq')} title="Attendance" iname="users" cl="#FF6666"  />
        <SquareButton title="Calendar" iname="calendar" cl="#9681EB" />
    </View>
    <View style={styles.btncontainer}>
        <SquareButton title="Broadcast" iname="podcast" cl="#3AA6B9" />
        <SquareButton title="Tasks" iname="check" cl="#FFA41B" />
    </View>
    <Text category='h3' style={{paddingBottom:20}}>Task List</Text>
        <TaskList/>
        
        </Layout>
        </View>
    );
}

export default Welcome

const styles = StyleSheet.create({

        container: {
            flex:1,
            justifyContent:"center",
            alignContent:"center",
            paddingTop:32,
            paddingVertical:"5%",
            paddingHorizontal:"5%",

        },
        layouts: {

            backgroundColor:"#EEEEEE"
        },
        header:{
            marginBottom:40
        },

        cards:{
            height:200,
            borderRadius:10,
            marginBottom:40,
            alignItems:"center",
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
            flexDirection:"row"
          },
          btncontainer: {
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-around",
            marginBottom:20
          }
});