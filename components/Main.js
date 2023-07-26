import React from 'react';
import { TouchableWithoutFeedback, StyleSheet, View,Image } from 'react-native';
import { Icon, IconElement, Input, Text , Button, Layout } from '@ui-kitten/components';

const Main = () => {
    return(
        <Layout>
            <Text category='h1'  style={styles.heading}>Hi Ramesh</Text>
        </Layout>
    );
}

export default Main;

const styles = StyleSheet.create({
    heading: {
        marginTop:60
        
    },
})