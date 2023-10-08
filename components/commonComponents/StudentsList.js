import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { List, ListItem, Text } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Ionicons';
import data from "../../roll.json";
import { getDatabase,  push, ref, set } from "firebase/database";
import { db } from '../../firebase/firebase';
import { useNavigation } from '@react-navigation/native';


const StudentsList = ({ subject }) => {
  const [students, setStudents] = useState(data);

  const navigation = useNavigation()

  const getCurrentDateKey = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
    const day = String(today.getDate()).padStart(2, '0');
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

  const handleSubmit = () => {
    var sname = subject
    const database = getDatabase();
    const currentDateKey = getCurrentDateKey();

    absentees = []
    for(var i=0;i<students.length;i++) {
      if(students[i].ispresent === false){
        absentees.push(students[i])
      }

    }
    const databaseRef = ref(database, `/attendance/${currentDateKey}/${sname}`);

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
