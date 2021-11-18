import styled from 'styled-components';
import {TextInput, Text, View, TouchableOpacity} from 'react-native';
import {Colors} from 'constants/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Label = styled(Text)({
  fontSize: 16,
  marginLeft: 3,
  marginBottom: 2,
  color: '#000',
});

export const FieldCustom = styled(TextInput)(props => ({
  borderWidth: 1,
  borderColor: props.status === 'normal' ? '#000' : Colors.dangerColor,
  borderRadius: 8,
  padding: !props.multiline ? 10 : 20,
  paddingLeft: !props.multiline ? 50 : 20,
  backgroundColor: '#FFF',
  textAlignVertical: props.multiline ? 'top' : null,
  height: !props.multiline ? 55 : null,
}));

export const SelectContainer = styled(View)({
  borderWidth: 1,
  borderRadius: 8,
  borderColor: '#000',
  paddingLeft: 35,
  overflow: 'hidden',
  backgroundColor: '#FFF',
});

export const FileContainer = styled(TouchableOpacity)({
  borderWidth: 1,
  borderRadius: 8,
  borderColor: '#000',
  paddingLeft: 35,
  overflow: 'hidden',
  backgroundColor: '#FFF',
  height: 55,
  justifyContent: 'center',
});

export const FilePlaceholder = styled(Text)({
  marginLeft: 15,
});

export const IconInput = styled(Icon)({
  position: 'absolute',
  bottom: 15,
  left: 15,
});

export const EyeIcon = styled(Icon)({
  position: 'absolute',
  bottom: 15,
  right: 20,
});
