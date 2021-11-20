import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from 'constants/Colors';
import {Card, Container, TextCustom} from './styledComponents';

const ErrorCard = ({msg}) => {
  return (
    <Card>
      <Icon name="checkbox-marked-circle-outline" size={30} color={Colors.green.strong} />
      <TextCustom>{msg}</TextCustom>
    </Card>
  );
};

export default ErrorCard;
