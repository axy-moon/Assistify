import { View,  Button, StyleSheet, TextInput, FlatList, TouchableOpacity,Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Layout, Text } from "@ui-kitten/components"
import { FIRESTORE_DB } from '../firebase/firebase';
import { Card } from '@ui-kitten/components';
import { addDoc, collection, deleteDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';
import { TopNavigationBar } from './commonComponents/TopNavigationBar';

const Todo = ({ navigation }) => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState('');

  /*   useEffect(() => {
        const todoRef = collection(FIRESTORE_DB, 'todos');

        const subscriber = onSnapshot(todoRef, {
            next: (snapshot) => {
                console.log('UPDATED');

                const todos = [];
                snapshot.docs.forEach((doc) => {
                    todos.push({
                        id: doc.id,
                        ...doc.data(),
                    });
                });

                setTodos(todos);
            },
        });
        return () => subscriber();
    }, []); */

    const addTodo = async () => {
        const newDoc = await addDoc(collection(FIRESTORE_DB, 'todos'), { title: todo, done: false });

        setTodo('');
    };

    const renderTodo = ({ item }) => {
        const ref = doc(FIRESTORE_DB, `todos/${item.id}`);

        const toggleDone = async () => {
            updateDoc(ref, { done: !item.done });
        };
        const deleteItem = async () => {
            deleteDoc(ref);
        };
        return (
            <View style={styles.todoContainer}>
                <TouchableOpacity onPress={toggleDone} style={styles.todo}>
                    {item.done && <Ionicons name="md-checkmark-circle" size={24} color="green" />}
                    {!item.done && <Entypo name="circle" size={24} color="black" />}

                    <Text style={styles.todoText}>{item.title} </Text>
                </TouchableOpacity>
                <Ionicons name="trash-outline" size={24} color="black" onPress={deleteItem} />
            </View>
        );
    };

    function getDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${date}/${month}/${year}`;
      }
      
      var d = getDate()

    return (
        <Layout>
        <View style={styles.container}>
            <TopNavigationBar title="Todos" />
            <Card style={[styles.cards,styles.shadowProp]}>
                <View style={{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                    <View style={{width:"30%"}}>
                        <Image source={require('../assets/task.png')} style={{width:100,height:100}} />
                    </View>
                
                    <View style={{width:"60%",alignItems:"center",justifyContent:"center"}}>
                        <Text style={{color:"#fff",fontSize:24,fontWeight:800}}>{d}</Text>
                        <Text style={{color:"#fff",fontSize:23,fontWeight:800}}>Friday</Text>
                    </View>
                </View>
          </Card>
            <Text style={{marginLeft:10, color:"#0D1282"}}></Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Add new todo"
                    onChangeText={(text) => setTodo(text)}
                    value={todo}
                />
                <Button onPress={addTodo} title="Add Todo" style={styles.btn} disabled={todo === ''} />
            </View>
            {todos.length > 0 && (
                <View>
                    <FlatList data={todos} renderItem={(item) => renderTodo(item)} keyExtractor={(todo) => todo.id} />
                </View>
            )}
        </View>
        </Layout>
    );
};

export default Todo;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginTop:40,
        backgroundColor:"#FFFFFF",
        height:"100%"
    },
    form: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        height: 38,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff',
        marginRight:8
    },
    cards:{
        borderRadius:10,
        marginVertical:30,
        backgroundColor: "#7C81AD",
        display:"flex",
        flexWrap:"wrap"
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
    todoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        padding: 10,
        marginVertical: 4,
        borderRadius: 10,
    },
    todoText: {
        flex: 1,
        paddingHorizontal: 4,
    },
    todo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
});
