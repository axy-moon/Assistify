import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {Picker} from '@react-native-picker/picker';
import { Text } from "@ui-kitten/components"
const SubjectPicker = () => {
    const [selectedValue, setSelectedValue] = useState('option1'); // Set initial selected value
  
    return (
      <View>
        <Text category="h5">Select an option:</Text>
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
    );
  };
  
  export default SubjectPicker;

  const styles = StyleSheet.create({
    select: {
        width:"50%",
        borderBottomWidth:3
    }
  });