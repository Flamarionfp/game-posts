import React from 'react';
import {Container, Title} from './styledComponents';
import {Colors} from 'constants/Colors';

const Button = ({
  title,
  onFunction = () => {},
  bg = Colors.primaryColor,
  disabled = false,
  size,
}) => {
  return (
    <Container disabled={disabled} bg={bg} activeOpacity={disabled ? 1 : 0.7} onPress={!disabled ? onFunction : () => {}}>
      <Title size={size}>{title}</Title>
    </Container>
  );
};

export default Button;
