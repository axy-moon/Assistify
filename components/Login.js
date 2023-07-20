import React from 'react';
import { TouchableWithoutFeedback, StyleSheet, View } from 'react-native';
import { Icon, IconElement, Input, Text , Button, Layout } from '@ui-kitten/components';

const Login = () => {
    const [value, setValue] = React.useState('');
    const [value1, setValue1] = React.useState('');

    const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  


  return (
    <Layout
      style={styles.container}
      level='1'
    >

    <Input
      placeholder='Place your Text'
      label='Email ID'
      value={value}
      style={styles.box}
      onChangeText={nextValue => setValue(nextValue)}
    />

<Input
      value={value1}
      label='Password'
      placeholder='Place your Text'
      style={styles.box}
      onChangeText={nextValue => setValue1(nextValue)}
    />


      <Button onPress={() => setCounter(counter + 1)}>
        BUTTON
      </Button>

    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    width:"75%"
  },
  text: {
    marginHorizontal: 8,
  },
  box: {
    marginBottom:30
  },
});

export default Login;