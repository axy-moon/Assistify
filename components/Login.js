import React,{ useState , useEffect } from 'react';
import {decode as atob, encode as btoa} from 'base-64'
import { TouchableWithoutFeedback, StyleSheet,Image } from 'react-native';
import { Icon, IconElement, Input, Text , Button, Layout } from '@ui-kitten/components';
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { ref, set,get,child } from "firebase/database";
import { db } from '../firebase/firebase';

const Login = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);




  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const buttonPress = () => {
    
    //signInWithEmailAndPassword(email, password)
    if(email === "" || password === ""){
      alert("All Fields are Required")
      return }
    const dbRef = ref(db);
    get(child(dbRef, 'users')).then((snapshot) => {
      if (snapshot.exists()) {
        arr = snapshot.toJSON()
        console.log("Reports: ",arr)
        if(arr.email==email && arr.password==btoa(password)) {
          navigation.navigate('Main')
         }
         else {
           alert("Invalid Credentials")
         }
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });

   

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

   const GoogleIcon = () => (
    <Image source={require('../assets/google.png')}  style={{width:20,height:20}} />
    )
  


  return (
    <Layout style={styles.container}>
      <Layout style={styles.main}>
      <Layout> 
        <Image source = {require('../assets/loginAvatar.png')} style={{width:340,height:340}} />
      </Layout>

      <Layout>
        <Text category='h1'>Login</Text>
      </Layout>
    
    <Layout style={{alignItems:"center"}}>
      <Input
        placeholder='Official Email Address'
        style={styles.box}
        label='Email'
        value={email}
        onChangeText={nextValue => setEmail(nextValue)}
      />

      <Input
            value={password}
            label='Password'
            style={styles.box}
            placeholder='Password'
            secureTextEntry={true}
            onChangeText={nextValue => setPassword(nextValue)}/>


      <Button style={styles.logButton} onPress={buttonPress}>Login</Button>

        <Layout style={styles.swith}>
          <Text style={{textAlign:'center',paddingBottom:20}}>Or</Text>
          <Button accessoryLeft={GoogleIcon} onPress={signInWithGoogle}>Login with Google</Button>
        </Layout>
    </Layout>
    </Layout>
    <Text category='p1' onPress={()=>navigation.navigate('Register')} style={{marginTop:20}}>New User? Register Here</Text>
  </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    height:"100%",
    alignContent:"center",
    justifyContent:"center",
    alignItems:"center",
    padding:20

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
    width:"85%",
    backgroundColor:"#55c5de",
    borderWidth:0,
    marginTop:40
  },
  swith:{
    marginTop:40,
    width:"85%"
  },
  gbutton: {
    marginTop:20,
    backgroundColor:"#068FFF",
  }

});



export default Login;