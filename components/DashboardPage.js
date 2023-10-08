import React, { useState } from 'react';
import { View, Button, FlatList } from 'react-native';
import { ListItem, Input, Text, ThemeProvider } from '@ui-kitten/components';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';

const theme = {
  // Your custom theme configurations, if needed
};

const DashboardPage = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [reports, setReports] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Fetch reports for the selected date and update the 'reports' state
    // Replace this with actual fetching of reports from your data source
    const dummyReports = [
      { id: 1, title: 'Report 1', date: date },
      { id: 2, title: 'Report 2', date: date },
      // Add more dummy reports if needed
    ];
    setReports(dummyReports);
  };

  const listItemStyle = {
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  };

  const renderIcon = (style) => (
    <Icon name="play-circle-outline" size={26} color="#0802A3" />
  );

  return (
    <ThemeProvider theme={theme}>
      <View style={{ padding: 20 }}>
        <Input
          placeholder="Select a date"
          value={selectedDate}
          onChangeText={(text) => setSelectedDate(text)}
        />

        <Button
          onPress={() => handleDateChange(selectedDate)}
          title="Go"
        />

        <FlatList
          data={reports}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={() => (
                <Text>
                  {item.title}
                </Text>
              )}
              style={listItemStyle}
              description={() => (
                <Text>
                  Date: {moment(item.date).format('MM/DD/YYYY')}
                </Text>
              )}
              accessoryRight={renderIcon}
            />
          )}
        />
      </View>
    </ThemeProvider>
  );
};

export default DashboardPage;
