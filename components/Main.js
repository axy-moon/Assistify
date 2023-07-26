import { View,StyleSheet } from 'react-native'
import React from 'react';
import { Text,Card,CircularProgressBar,Input, Layout } from '@ui-kitten/components'
import TaskList from './TaskList';
import { List } from '@ui-kitten/components';


const Welcome = () => {
    return(
        <View style={styles.container}>
            <Layout style={styles.layouts}>
            <Text category='h1' style={styles.header}>Hi Ramesh</Text>
    
            <Input
            style={styles.input}
            placeholder='Search'
            />
    
            <Card style={[styles.cards,styles.shadowProp]}>
                <Text category='h4'>
                    Attendance
                </Text>
                <View style={styles.Adetails}>
                    <View style={{paddingVertical:26}}>
                        <Text category='h6'>No of Presentees: 41</Text>
                        <Text category='h6'>No of Absentees: 19</Text>
                    </View>
                    <CircularProgressBar progress={0.5} style={styles.bar} />
                </View>
            </Card>
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
            backgroundColor:"#EEEEEE"
        },
        layouts: {
            marginVertical:"10%",
            marginHorizontal:"10%",
            backgroundColor:"#EEEEEE"
        },
        header:{
            marginBottom:40
        },

        cards:{
            height:200,
            borderRadius:10,
            margin:"auto",
            marginBottom:80

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
          }
});