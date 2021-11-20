import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Container, Title} from './styledComponents';
import {Colors} from 'constants/Colors';

const Button = ({
  title,
  onFunction = () => {},
  bg = Colors.primaryColor,
  disabled = false,
  size,
  isLoading = false,
}) => {
  return (
    <Container
      disabled={disabled || isLoading}
      bg={bg}
      activeOpacity={disabled ? 1 : 0.7}
      onPress={!disabled ? onFunction : () => {}}>
      <Title size={size}>{title}</Title>
      {isLoading && (
        <ActivityIndicator style={{marginLeft: 10}} size="small" color="#fff" />
      )}
    </Container>
  );
};

export default Button;
