import React from 'react';
import { useState } from 'react';
import * as eva from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, Layout,  IconRegistry} from '@ui-kitten/components';
import Login from './components/Login';
import Home from './components/Home'
import Main from './components/Main';
import SquareButton from './components/commonComponents/SquareButton';
import { StatusBar } from 'expo-status-bar';
import Profile from './components/Profile';
import Notifications from './components/Notifications';
import Register from './components/Register';
import AttendanceScreen from './components/Attendance';
import SelectSimpleUsageShowcase from './components/commonComponents/SelectSimpleUsageShowcase';
import Todo from './components/Todo';
import SubjectDetails from './components/SubjectDetails';
import DashboardPage from './components/DashboardPage';


const { Navigator, Screen } = createStackNavigator();

const App = () => (
  <>
  <IconRegistry icons={EvaIconsPack} />
  <ApplicationProvider {...eva} theme={eva.light}>
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
      <Screen name='Details' component={SubjectDetails}/>
      <Screen name='Dashboard' component={DashboardPage}/>
      <Screen name='Login' component={Login}/>
      <Screen name='Todo' component={Todo}/>
      <Screen name='Home' component={Home}/>
      <Screen name='Register' component={Register}/>
        <Screen name='Main' component={Main}/>
        <Screen name='Profile' component={Profile}/>
        <Screen name='Notifications' component={Notifications}/>
      <Screen name='Attendance' component={AttendanceScreen}/>

        



      </Navigator>
    </NavigationContainer>
    <StatusBar translucent />
  </ApplicationProvider>
  </>
);

export default App;