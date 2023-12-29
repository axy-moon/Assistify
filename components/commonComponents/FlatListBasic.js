import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    paddingVertical: 16,
    fontSize: 18,
    color:"#fff",
    fontWeight:700
  },
  listItem : {
    marginBottom:5,
    borderRadius:6,
    height:50,
    backgroundColor:"#9DB2BF",
    flexDirection:"row",
    alignContent:"center",
  }
});

const FlatListBasic = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: '22MX108'},
          {key: '22MX111'},
          {key: '22MX113'},
          {key: '22MX116'},
          {key: '22MX128'},
        ]}
        renderItem={({item}) => 
      <View style={styles.listItem}>
        <Icon name="user" size={20} color="#000" style={{padding:16}} />
        <Text style={styles.item}>{item.key}</Text>

      </View>
      }
      />
    </View>
  );
};

export default FlatListBasic;