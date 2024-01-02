import React, { useState } from 'react';
import { View, FlatList, StyleSheet,Image } from 'react-native';
import { ListItem, Input, Text, Button, Card } from '@ui-kitten/components';

import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import { ref, set,get,child } from "firebase/database";
import { db } from '../firebase/firebase';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { Report } from './Report';
import { TopNavigationBar } from './commonComponents/TopNavigationBar';




const DashboardPage = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [date, setDate] = useState(new Date());
  const [reports, setReports] = useState([]);
  const [subjects,setSubjects] = useState([]);
  const [list,setLists] = useState(true);

  const handleDateChange = async (date) => {
    // Fetch reports for the selected date and update the 'reports' state
    // Replace this with actual fetching of reports from your data source
    console.log(date)  
    const dbRef = ref(db);
      get(child(dbRef, `attendance/${selectedDate}`)).then((snapshot) => {
        console.log("check",selectedDate)
        if (snapshot.exists()) {
          arr = snapshot.toJSON()
          setSubjects(Object.keys(arr))
          console.log("Subj",subjects)
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
    setSelectedDate(formatDate(date))
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const handleListItemPress = (item) => {
    console.log(item)
    const dbRef = ref(db);
    console.log(selectedDate)
    get(child(dbRef, `attendance/${selectedDate}/${item}`)).then((snapshot) => {
      if (snapshot.exists()) {
        arr = snapshot.toJSON()
        setReports(Object.keys(arr))
        console.log("Reports: ",Object.keys(reports))
        setLists(false)
        // console.log("Subj",subjects)
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });

  }

  const listItemStyle = {
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    marginHorizontal : 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    
  };

  const renderIcon = () => (
    <Icon name="play-circle-outline" size={26} color="#0802A3" />
  );

  return (
      <View style={{paddingTop:30,paddingHorizontal:"5%",backgroundColor:"#fff",width:"100%",height:"100%" }}>
        <TopNavigationBar title="Dashboard" />
        <Card style={[styles.cards,styles.shadowProp]}>
                <View style={{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                    <View style={{width:"30%"}}>
                        <Image source={require('../assets/roll-call.png')} style={{width:100,height:100}} />
                    </View>
                
                    <View style={{width:"60%",alignItems:"center",justifyContent:"center"}}>
                        <Text style={{color:"#fff",fontSize:24,fontWeight:800}}>Attendance</Text>
                        <Text style={{color:"#fff",textAlign:"center",fontWeight:700,marginBottom:10}}>View Reports for Previous Records</Text>
                    </View>
                </View>
            </Card>

          <Input
            value={date.toLocaleDateString()}
          style={{ marginBottom:20}}

            disabled/>
          <View style={{display:"flex",flexDirection:"row",gap:10}}>
          <Button  onPress={showDatepicker} status="primary" >Change Date</Button>
          <Button  onPress={handleDateChange}  status="danger" >Submit</Button>
          </View>
       { list ?  ( <FlatList
          data={subjects}
          style={{marginTop:20}}
          renderItem={({ item }) => (
            <ListItem
              title={() => (
                <Text>
                  {item}
                </Text>
              )}
              style={listItemStyle}
              description={() => (
                <Text>
                  Date: {selectedDate}
                </Text>
              )}
              accessoryRight={renderIcon}
              onPress={() => handleListItemPress(item)}
            />
          )}
        />) : 
        (
        
          reports.map((eventData) => (
            <Report text={eventData} />))
          

        
        
        ) }
      </View>
  );
};

export default DashboardPage;

const styles = StyleSheet.create({

  cards:{
      borderRadius:10,
      marginVertical:30,
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

});