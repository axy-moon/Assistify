import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { List, ListItem, Text } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Ionicons';
import data from "../../roll.json";
import { getDatabase,  push, ref, set } from "firebase/database";
import { db } from '../../firebase/firebase';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';


const StudentsList = ({ subject , date }) => {
  const [students, setStudents] = useState(data);

  const navigation = useNavigation()

    const getCurrentDateKey = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
 

  const toggleAttendance = (rollno) => {
    setStudents(prevStudents => {
      const updatedStudents = prevStudents.map(student => {
        if (student.rollno === rollno) {
          return { ...student, ispresent: !student.ispresent };
        }
        return student;
      });
      return updatedStudents;
    });
  };

  const handleSubmit =  async() => {

   


    var sname = subject
    const curDate = getCurrentDateKey(date)
    const database = getDatabase();

    absentees = []
    for(var i=0;i<students.length;i++) {
      if(students[i].ispresent === false){
        absentees.push(students[i])
      }

    }
    const databaseRef = ref(database, `/attendance/${curDate}/${sname}`);

    // Push a new entry for the students for the current date
    const newEntryRef = push(databaseRef);
    set(newEntryRef, students)
      .then(() => {
        console.log('Student data for the current date has been successfully saved to Firebase.');
        alert("Attendance Stored Successfully")
        console.log(absentees)
        
      })
      .catch((error) => {
        console.error('Error saving student data to Firebase:', error);
      });
 
      console.log(absentees)
      let temp = absentees.map(student => student.rollno).join(',')
      temp = JSON.stringify(temp)
      const baseUrl = 'http://192.168.249.10:3000/api/email';
      try {
        const response = await axios.post(baseUrl, {
          "from": "assistify.psgtech@gmail.com",
          "to": "22mx108@psgtech.ac.in",
          "subject": `Assistify - Attendance Report for ${subject}`,
          "text": `\nAbsentees for ${subject} class on ${date}: \n \n \n ${temp} \n\n -Assistify`
        });
        console.log(response.data); // Log the response data
      } catch (error) {
        console.error('Error sending email:', error);
        // Handle the error appropriately, e.g., show an error message to the user.
      }
  

  }

  const toggleAllAttendance = () => {
    setStudents(prevStudents => {
      const updatedStudents = prevStudents.map(student => ({
        ...student,
        ispresent: !student.ispresent
      }));
      return updatedStudents;
    });
  };

  const goback = () => {
    navigation.navigate("Main")
  }

  const reset = () => {
    setStudents(prevStudents => {
      const updatedStudents = prevStudents.map(student => ({
        ...student,
        ispresent: true
      }));
      return updatedStudents;
    });
    alert("Attendance Reset Successfully")
  }

  const renderItem = ({ item }) => {
    const handleAttendance = () => {
      toggleAttendance(item.rollno);
    };

    return (
      <ListItem
        title={`${item.rollno}`}
        description={`${item.name}`}
        style={[styles.names, styles.shadowProp]}
        accessoryRight={item.ispresent ? <PresentIcon /> : <AbsentIcon />}
        onPress={handleAttendance}
      />
    );
  };

  const AbsentIcon = () => (
    <Icon name="close-circle" size={26} color="#FF0000" />
  );

  const PresentIcon = () => (
    <Icon name="checkmark-circle" size={26} color="#1F883D" />
  );

  const Head = () => (
    <View style={styles.header}>
      <Text onPress={goback} style={styles.toggleText}>Back</Text>
      <Text onPress={reset} style={styles.toggleText}>Reset</Text>
      <Text onPress={toggleAllAttendance} style={styles.toggleText}>Toggle All</Text>
      <Text onPress={handleSubmit} style={styles.toggleText}>Submit</Text>

    </View>
  );

  return (
    <List
      style={styles.container}
      data={students}
      renderItem={renderItem}
      ListHeaderComponent={Head}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  names: {
    marginVertical: 2,
    borderRadius: 6,
    padding: 2,
    backgroundColor: "#F5F5F5"
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  toggleText: {
    color: '#1F883D',
    fontSize: 16
  }
});

export default StudentsList;
