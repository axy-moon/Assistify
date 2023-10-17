// ChatScreen.js

import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Button, Input, Text, Card } from '@ui-kitten/components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage) {
      setMessages([...messages, { id: messages.length, text: newMessage, isUser: true }]);
      setNewMessage('');
    }
  };

  const renderMessage = ({ item }) => {
    const isUser = item.isUser;
    return (
      <Card
        style={{
          maxWidth: '70%',
          alignSelf: isUser ? 'flex-end' : 'flex-start',
          marginTop: 6,
          marginBottom: 2,
          marginRight: isUser ? 5 : 0,
          marginLeft: isUser ? 0 : 5,
          backgroundColor:"transparent",
          borderWidth:0
        }}
      >
        <Text
          style={{
            textAlign: isUser ? 'right' : 'left',
            backgroundColor: isUser ? '#007AFF' : '#E5E5EA',
            color: isUser ? 'white' : 'black',
            padding: 10,
            borderRadius: 10,
          }}
        >
          {item.text}
        </Text>
      </Card>
    );
  };

  return (
    <View style={{ flex: 1 , backgroundColor:"transparent",marginTop:20}}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMessage}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
        <Input
          style={{ flex: 1, marginRight: 10 }}
          placeholder="Type a message"
          value={newMessage}
          onChangeText={(text) => setNewMessage(text)}
        />
        <Button onPress={handleSend}>Send</Button>
      </View>
    </View>
  );
};

export default ChatScreen;
