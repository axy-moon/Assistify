import React from 'react';
import { TouchableWithoutFeedback, StyleSheet,Image,View } from 'react-native';
import { Icon, IconElement, Input, Text , Button, Layout } from '@ui-kitten/components';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';

const Register = () => {
  const [value, setValue] = React.useState('');
  const [value1, setValue1] = React.useState('');


  const buttonPress = () => {
    navigation.navigate('Main')
 /*      set(ref(db, 'users/'), {
       username: value,
       password: value1
     }).then(()=>{
       alert('data updated');
     }).catch((error) => {
       alert(error);
     })
     console.log(value,value1) */
   }

  return (
    <Layout style={styles.container}>
        <Layout> 
        <Image source = {require('../assets/ui-design.png')} style={{width:400,height:400}} />
      </Layout>

        <Text category='h1' style={{textAlign:"left"}}>Register</Text>
        <View>
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


      <Button style={styles.logButton} onPress={buttonPress}>Register</Button>
                      <Layout style={styles.swith}>
          <Text style={{textAlign:'center'}}>Or</Text>
          <Button accessoryLeft={GoogleIcon} onPress={()=>navigation.navigate('Register')}>Login with Google</Button>
        </Layout>
      </Layout>
        </View>
    </Layout>
  )
}

export default Register


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
      backgroundColor:"#55c8de",
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