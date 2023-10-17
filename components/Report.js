import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Layout, Text } from '@ui-kitten/components';

const Footer = (props) => (
  <View
    {...props}
    style={[props.style, styles.footerContainer]}
  >
    <Button
      style={styles.footerControl}
      size='small'
    >
      View
    </Button>
  </View>
);

export const Report = (props) => (
  <>
    <Layout
      style={styles.topContainer}
      level='1'
    >


      <Card
        style={styles.card}
        footer={Footer}
      >
        <Text>
          {props.text}
        </Text>
      </Card>

    </Layout>

  </>
);

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:20
  },
  card: {
    flex: 1,
    margin: 2,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footerControl: {
    marginHorizontal: 2,
  },
});
