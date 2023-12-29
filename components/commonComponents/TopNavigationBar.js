import React from 'react';
import { TopNavigation, TopNavigationAction, Divider } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


export const TopNavigationBar= ({ props }) => {
  const navigation = useNavigation();

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} />
  );
  
  const goBackArrow = () => {
    navigation.goBack()
  }
  const BackIcon = () => (
    <Icon
      name='arrow-left'
      size={18} color="#000" 
      onPress={goBackArrow}
      style={{paddingRight:10}}
    />
  );

  
  return(
  <>  

      <TopNavigation
      accessoryLeft={BackAction}
      title="Attendance"
      />
      
      <Divider />
    </>

)};
