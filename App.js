import React from 'react';
import * as eva from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ApplicationProvider, Layout, Text, Card } from '@ui-kitten/components';
import Login from './components/Login';
import Home from './components/Home'
import Main from './components/Main';


const { Navigator, Screen } = createStackNavigator();

const LoginScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
   <Login/>
  </Layout>
);

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
<NavigationContainer>
      
      <Navigator screenOptions={{headerShown: false}}>
      <Screen name='Main' component={Main}/>
      <Screen name='Home' component={Home}/>
      <Screen name='Login' component={LoginScreen}/>

    </Navigator>
</NavigationContainer>

  </ApplicationProvider>
);
