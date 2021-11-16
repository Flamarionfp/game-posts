/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import React from 'react';
import {Container, Title} from './styledComponents';
import {Colors} from 'constants/Colors';

const Button = ({
  title,
  onFunction = () => {},
  bg = Colors.primaryColor,
  size,
}) => {
  return (
    <Container bg={bg} onPress={onFunction}>
      <Title size={size}>{title}</Title>
    </Container>
  );
};

export default Button;
