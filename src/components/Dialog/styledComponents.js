import styled from 'styled-components';
import {View, Text} from 'react-native';
import {widthToDp} from 'helpers/convertDimension';

export const ModalContainer = styled(View)(props => ({
  alignItems: props.isDialog ? 'center' : null,
  justifyContent: 'center',
  backgroundColor: '#fff',
  borderRadius: 15,
  paddingVertical: 25,
}));

export const IconContainer = styled(View)({
  alignItems: 'center',
});

export const TitleContainer = styled(View)({
  marginHorizontal: 20,
});

export const Title = styled(Text)(props => ({
  color: '#5a5773',
  fontSize: 25,
  fontWeight: 'bold',
  marginTop: props.customMargin,
  textAlign: 'center',
}));

export const Message = styled(Text)({
  color: '#666666',
  fontSize: widthToDp(4),
  marginHorizontal: 20,
  marginVertical: 20,
  textAlign: 'center',
});

export const DialogButtonsContainer = styled(View)({
  marginTop: 20,
  width: '100%',
  paddingHorizontal: '10%',
});

export const ContainerSingleButton = styled(View)({
  marginTop: 20,
  paddingVertical: 5,
  width: '100%',
  paddingHorizontal: '10%',
});
