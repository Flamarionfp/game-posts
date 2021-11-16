import React from 'react';
import {Text} from 'react-native';
import {Label, FieldCustom, IconInput} from './styledComponents';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Field = ({
  label = '',
  placeholder = '',
  autoComplete = 'off',
  textContentType = 'none',
  autoFocus = false,
  keyboardType = 'default',
  maxLength,
  onFunction = () => {},
  value = '',
  iconName = '',
  status = 'normal',
  multiline = false,
  numberOfLines = 1,
}) => {
  return (
    <>
      <Label>{label}</Label>
      <FieldCustom
        value={value}
        onChangeText={onFunction}
        placeholder={placeholder}
        placeholderTextColor="#9C9999"
        autoComplete={autoComplete}
        textContentType={textContentType}
        autoFocus={autoFocus}
        keyboardType={keyboardType}
        maxLength={maxLength}
        status={status}
        multiline={multiline}
        numberOfLines={numberOfLines}
      />
      {!multiline && <IconInput name={iconName} size={25} color="#000" />}
    </>
  );
};

export default Field;
