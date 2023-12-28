import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
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
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
        ]}
        renderItem={({item}) => 
      <View style={styles.listItem}>
        <Icon name="user" size={20} color="#F5F5F5" style={{padding:16}} />
        <Text style={styles.item}>{item.key}</Text>

      </View>
      }
      />
    </View>
  );
};

export default FlatListBasic;