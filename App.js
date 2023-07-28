import React from 'react';
import * as eva from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, Layout,  IconRegistry} from '@ui-kitten/components';
import Login from './components/Login';
import Home from './components/Home'
import Main from './components/Main';
import Navbar from './components/Navbar';
import { useState } from 'react';
import SquareButton from './components/commonComponents/SquareButton';

const { Navigator, Screen } = createStackNavigator();

const LoginScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
   <Login/>
  </Layout>
);



export default () => (
  <>
  <IconRegistry icons={EvaIconsPack} />
  <ApplicationProvider {...eva} theme={eva.light}>
<NavigationContainer>
      
      <Navigator screenOptions={{headerShown: false}}>
      <Screen name='Main' component={Main}/>
      <Screen name='Home' component={Home}/>
      <Screen name='Login' component={LoginScreen}/>
      <Screen name='Button' component={SquareButton}/>


    </Navigator>
</NavigationContainer>
  <Navbar/>
  </ApplicationProvider>
  </>
);
