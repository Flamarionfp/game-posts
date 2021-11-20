import styled from 'styled-components';
import {View, Text} from 'react-native';

export const ContainerRow = styled(View)({
  flexDirection: 'row',
});

export const Center = styled(View)({
  alignItems: 'center',
  justifyContent: 'center',
});

export const VerticalCenter = styled(View)({
  alignItems: 'center',
});

export const HorizontalCenter = styled(View)({
  justifyContent: 'center',
});

export const Flex = styled(View)(props => ({
  flex: props.flex,
}));

export const InputContainer = styled(View)({
  marginTop: 10,
});

export const DefaultText = styled(Text)(props => ({
  color: props.color || '#000',
  fontSize: props.fontSize || 16,
  fontWeight: props.fontWeight || 'normal',
  textAlign: props.textAlign || null,
}));

export const ButtonContainer = styled(View)({
  marginTop: 25,
  marginBottom: 35,
});
