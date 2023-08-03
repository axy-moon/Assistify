import React from "react";
import {View} from 'react-native';
import { Layout, Text } from "@ui-kitten/components";''

export default function WelcomeScreen({navigation}) {
    return(
        <Layout>
            <Text category="h1" onPress={() => navigation.navigate('Home')}>Welcome Screen</Text>
        </Layout>
    );
}