import {  Layout,Text, Input,Button} from "@ui-kitten/components"
import { View,StyleSheet,TouchableOpacity,Image } from "react-native"
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import React , { useState , useEffect } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import SubjectPicker from "./commonComponents/SubjectPicker";
import AttendanceScreen from "./Attendance"
import { ref, set,get,child } from "firebase/database";
import { db } from '../firebase/firebase';



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

        {sub ?
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

        }
      </Layout>
    )
}


const styles = StyleSheet.create({
    container : {
        paddingTop:60,
        backgroundColor:"#fff"
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