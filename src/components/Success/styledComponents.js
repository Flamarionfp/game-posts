import styled from 'styled-components';
import {View, Text} from 'react-native';
import {Colors} from 'constants/Colors';

export const Card = styled(View)({
  borderRadius: 3,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  height: 50,
  marginTop: 20,
});

export const Container = styled(View)({
  marginVertical: 3,
});

export const TextCustom = styled(Text)({
  fontSize: 16,
  paddingHorizontal: 10,
  color: Colors.green.strong,
});
