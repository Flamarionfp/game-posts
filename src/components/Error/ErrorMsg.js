import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from 'constants/Colors';
import {Card, Container, TextCustom} from './styledComponents';

const ErrorCard = ({isValidation, msg}) => {
  return (
    <>
      {isValidation ? (
        <Container>
          <TextCustom>{msg}</TextCustom>
        </Container>
      ) : (
        <Card>
          <Icon
            name="alert-circle-outline"
            size={30}
            color={Colors.dangerColor}
          />
          <TextCustom>{msg}</TextCustom>
        </Card>
      )}
    </>
  );
};

export default ErrorCard;
