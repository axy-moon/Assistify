import {  Layout,Text, Input,Button} from "@ui-kitten/components"
import { View,StyleSheet,TouchableOpacity,Image } from "react-native"
import { Card } from "@ui-kitten/components";
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Ionicons';
import React , { useState , useEffect } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import SubjectPicker from "./commonComponents/SubjectPicker";
import AttendanceScreen from "./Attendance"
import { ref, set,get,child } from "firebase/database";
import { db } from '../firebase/firebase';
import { TopNavigationBar } from "./commonComponents/TopNavigationBar";


export default function SubjectDetails() {
    const [date, setDate] = useState(new Date());
    const [selectedValue, setSelectedValue] = useState('');
    const [sub,setSub] = useState(false)

    const handleSubmit = () => {
      if(selectedValue==="") {
        alert("Subject should be selected")
        return }
        console.log(selectedValue)
        setSub(true)

        const dbRef = ref(db);
        get(child(dbRef, `course/2023/1st Year/-NhB5NDWHqE2oszNk8IH/`)).then((snapshot) => {
          if (snapshot.exists()) {
            arr = snapshot.toJSON()
            console.log("Subj",arr.title)
          } else {
            console.log("No data available");
          }
        }).catch((error) => {
          console.error(error);
        });

    }

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setDate(currentDate);
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
    
  
    return (
      <Layout style={styles.container}>
        <TopNavigationBar />
       {/*  {sub ?
        (
        <AttendanceScreen subject={selectedValue} date={date} />):(
        <>
        <Text category="h1" style={{textAlign:"center",marginBottom:60}}>Subject Details</Text>
        <View style={styles.main}>
        
        <Input
        style={styles.box}
        value={date.toLocaleDateString()}
        disabled
      />
        <Button  onPress={showDatepicker} status="primary" >Change Date</Button>

        <View>
        <Text category="h5" style={styles.btn}>Subject:</Text>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
          dropdownIconColor={"#000"}
          style={styles.select}
        >
          <Picker.Item label="Choose Subject" value="" />
          <Picker.Item label="CC - 20MX31" value="Cloud Computing" />
          <Picker.Item label="SPM - 20MXAB" value="Software Project Management" />
          <Picker.Item label="HCI - 20MXBJ" value="Human Computer Interaction" />
          <Picker.Item label="SNWM - 20MXBL" value="Social Network and Web Mining" />
          <Picker.Item label="ML - 20MXBC" value="Machine Learning" />
          <Picker.Item label="DevOps - 20MXBO" value="DevOps" />
          <Picker.Item label="MAD - 20MX36" value="Mobile Application Development" />

        </Picker>
      </View>
        
        <Button onPress={handleSubmit} style={{"marginTop":40}} status='success'>Submit</Button>
        </View> 
        </>)

        } */}

        <View style={styles.gridContainer}>
        <Card style={[styles.cards,styles.shadowProp]}>
                <View style={{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                    <View style={{width:"30%"}}>
                        <Image source={require('../assets/calendar.png')} style={{width:100,height:100}} />
                    </View>
                
                    <View style={{width:"60%",alignItems:"center",justifyContent:"center"}}>
                        <Text style={{color:"#fff",fontSize:24,fontWeight:800}}>Semester : 3</Text>
                        <Text style={{color:"#fff",marginTop:20,fontWeight:800}}>No of Subjects : 6</Text>
                        <Text style={{color:"#fff",fontWeight:700}}>Total Strength : 60</Text>
                    </View>
                </View>
          </Card>
          <View style={{marginHorizontal:"3%"}}>
                <Text>Select the date for Attendance</Text>
              <View style={{flexDirection:"row"}}>
                    <View style={styles.box}>
                        <Icon name="calendar" size={20} color="#000" />
                        <Text style={{fontSize:20 , paddingLeft:10,fontWeight:700}}>{date.toLocaleDateString()}</Text>
                    </View>

                    <Button  onPress={showDatepicker} style={{width:"28%",marginVertical:10,backgroundColor:"#FFC436",borderWidth:0}} >Select</Button>
              </View>

          </View>

          <View style={{flexDirection:"row",flexWrap:"wrap",width:"100%",height:"55%",justifyContent:"center"}}>
            <View style={styles.grid}>
                <Text style={{textAlign:"center"}}>20MX31</Text>
                      <Image source={require('../assets/book.png')} style={{width:75,height:75}} />
                <Text style={{textAlign:"center"}}>Cloud Computing</Text>

            </View>
            <View style={styles.grid}>
                <Text style={{textAlign:"center"}}>20MXAB</Text>
                      <Image source={require('../assets/book.png')} style={{width:75,height:75}} />
                <Text style={{textAlign:"center"}}>Software Project Management</Text>

            </View>
            <View style={styles.grid}>
                <Text style={{textAlign:"center"}}>20MXBO</Text>
                      <Image source={require('../assets/book.png')} style={{width:75,height:75}} />
                <Text style={{textAlign:"center"}}>DevOps</Text>

            </View>
            <View style={styles.grid}>
                <Text style={{textAlign:"center"}}>20MXBJ</Text>
                      <Image source={require('../assets/book.png')} style={{width:75,height:75}} />
                <Text style={{textAlign:"center"}}>Human Computer Interaction</Text>

            </View>
            <View style={styles.grid}>
                <Text style={{textAlign:"center"}}>20MXCA</Text>
                      <Image source={require('../assets/book.png')} style={{width:75,height:75}} />
                <Text style={{textAlign:"center"}}>Entrepreneurship</Text>

            </View>
            <View style={styles.grid}>
                <Text style={{textAlign:"center"}}>20MX36</Text>
                      <Image source={require('../assets/book.png')} style={{width:75,height:75}} />
                <Text style={{textAlign:"center"}}>Mobile Application Development</Text>

            </View>
          </View>

          <Button style={{backgroundColor:"#FF6666",borderColor:"transparent"}}>Confirm</Button>
        </View>


      </Layout>
    )
}


const styles = StyleSheet.create({
    container : {
        paddingTop:40,
        backgroundColor:"#fff",
    },

    gridContainer : {
      marginHorizontal:"5%",
      height:"100%"

    },

    cards:{
      borderRadius:10,
      marginVertical:30,
      backgroundColor: "#11009E",
      display:"flex",
      flexWrap:"wrap"
  },
  shadowProp: {
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },

    grid: {
      width:"30%",
      height:160,
      backgroundColor:"#96B6C5",
      borderRadius:5,
      justifyContent:"center",
      alignItems:"center",
      margin:5
    },


    main : {
        width:"75%",
        display:"flex",
        alignContent:"center",
        backgroundColor:"#fff",
        height:"100%",
        marginHorizontal:"15%"

    },
    box : {
        marginVertical:10,
        width:"70%",
        marginRight:10,
        paddingLeft:20,
        borderRadius: 4,
        backgroundColor:"#c7c8c9",
        flexDirection:"row",
        alignItems:"center"
      },
    btn : {
        marginTop:20
    },

    select: {
      borderColor:"#000",
      borderWidth:1,
      backgroundColor:"#F1EFEF",
      marginTop:6
  }

    
});