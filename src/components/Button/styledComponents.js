/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import styled from 'styled-components';
import {TouchableOpacity, Text} from 'react-native';
import {Colors} from 'constants/Colors';

export const Container = styled(TouchableOpacity)(props => ({
  backgroundColor: props.bg || Colors.primaryColor,
  height: 50,
  borderRadius: 8,
  alignItems: 'center',
  justifyContent: 'center',
}));

export const Title = styled(Text)(props => ({
  color: '#fff',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  fontSize: props.size || 21,
}));
