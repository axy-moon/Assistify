import React from 'react';
import { TouchableWithoutFeedback, StyleSheet,Image } from 'react-native';
import { Icon, IconElement, Input, Text , Button, Layout } from '@ui-kitten/components';
import { ref, set } from "firebase/database";
import { db } from '../firebase/firebase';

const Login = ({navigation}) => {
    const [value, setValue] = React.useState('');
    const [value1, setValue1] = React.useState('');


function writeUserData(userId, name, email, imageUrl) {
  
}


    const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const buttonPress = () => {
    navigation.navigate('Main')
    /* set(ref(db, 'users/'), {
      username: value,
      password: value1
    }).then(()=>{
      alert('data updated');
    }).catch((error) => {
      alert(error);
    })
    console.log(value,value1) */
  }

   const GoogleIcon = () => (
    <Image source={require('../assets/google.png')}  style={{width:20,height:20}} />
    )
  


  return (
    <Layout style={styles.container}>
      <Layout style={styles.main}>
      <Layout> 
        <Image source = {require('../assets/loginAvatar.png')} style={{width:400,height:400}} />
      </Layout>

      <Layout>
        <Text category='h1'>Login</Text>
      </Layout>
    
    <Layout style={{alignItems:"center"}}>
      <Input
        placeholder='Official Email Address'
        style={styles.box}
        label='Email'
        value={value}
        onChangeText={nextValue => setValue(nextValue)}
      />

      <Input
            value={value1}
            label='Password'
            style={styles.box}
            placeholder='Password'
            secureTextEntry={true}
            onChangeText={nextValue => setValue1(nextValue)}/>


      <Button style={styles.logButton} onPress={buttonPress}>Login</Button>

        <Layout style={styles.swith}>
          <Text style={{textAlign:'center'}}>Or</Text>
          <Button accessoryLeft={GoogleIcon}>Login with Google</Button>
        </Layout>
    </Layout>
    </Layout>
  </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    height:"100%",
    alignContent:"center",
    justifyContent:"center",
    alignItems:"center"
  },
  main:{
    width:"85%",
  },
  text: {
    marginHorizontal: 8,
  },
  box: {
    marginTop:30,
  },
  logButton : {
    width:420,
    backgroundColor:"#55c5de",
    borderWidth:0,
    marginTop:40
  },
  swith:{
    marginTop:40,
    width:420
  },
  gbutton: {
    marginTop:20,
    backgroundColor:"#068FFF",
  }

});



export default Login;