import React from 'react';
import { TouchableWithoutFeedback, StyleSheet, View,Image } from 'react-native';
import { Icon, IconElement, Input, Text , Button, Layout } from '@ui-kitten/components';

const Login = ({navigation}) => {
    const [value, setValue] = React.useState('');
    const [value1, setValue1] = React.useState('');

    const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const buttonPress = () => {
    navigation.navigate('Home')
  }

   const GoogleIcon = () => (
    <Image source={require('../assets/google.png')}  style={{width:20,height:20}} />
    )
  


  return (
    <View style={styles.main}>
       <Image source = {require('../assets/loginAvatar.png')} style={{width:400,height:400}} />
    <View>
      <Text category='h1'>Login</Text>
    </View>
    <Layout
      style={styles.container}
      level='1'
    >
   
    <Input
      placeholder='Official Email Address'
      label='Email'
      value={value}
      style={styles.box}
      onChangeText={nextValue => setValue(nextValue)}
    />

<Input
      value={value1}
      label='Password'
      placeholder='Password'
      style={styles.box}
      secureTextEntry={true}
      onChangeText={nextValue => setValue1(nextValue)}
    />


      <Button style={styles.logButton} >
        Login
      </Button>
      <Button onPress={buttonPress}>LOGIN</Button>

    <View style={styles.swith}>
      <Text style={{textAlign:'center'}}>Or</Text>
      <Button style={styles.gbutton} accessoryLeft={GoogleIcon}>Login with Google</Button>

    </View>
    </Layout>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    display:"flex",
    justifyContent:"space-between",
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    width:"75%",

  },
  text: {
    marginHorizontal: 8,
  },
  box: {
    marginTop:30,
  },
  logButton : {
    width:380,
    backgroundColor:"#55c5de",
    borderWidth:0,
    marginTop:40
  },
  swith:{
    marginTop:20,
    width:380
  },
  gbutton: {
    marginTop:20,
    backgroundColor:"#068FFF",
  }
});

export default Login;