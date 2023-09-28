import {  Layout,Text, Input,Button} from "@ui-kitten/components"
import { View,StyleSheet,TouchableOpacity,Image } from "react-native"
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import React , { useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import SubjectPicker from "./commonComponents/SubjectPicker";



export default function SubjectDetails() {
    const [date, setDate] = useState(new Date(1598051730000));
    const [selectedValue, setSelectedValue] = useState('');

    const handleSubmit = () => {
        console.log(selectedValue)
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
        <Image source = {require('../assets/stack.png')} style={{width:200,height:200,marginLeft:2}} />

        <Text category="h1" style={{textAlign:"center"}}>Subject Details</Text>
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
          <Picker.Item label="SPM" value="SPM" />
          <Picker.Item label="HCI" value="HCI" />
          <Picker.Item label="CC" value="CC" />
          <Picker.Item label="SNWM" value="SNWM" />
          <Picker.Item label="ML" value="ML" />
          <Picker.Item label="DevOps" value="DevOps" />

        </Picker>
      </View>
        
        <Button onPress={handleSubmit} style={{"marginTop":40}} status='success'>Submit</Button>
        </View>
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

    
});