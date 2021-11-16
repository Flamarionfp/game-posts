import React from 'react';
import {Label, FieldCustom, IconInput} from './styledComponents';

const Field = ({
  label = 'Senha',
  placeholder = '',
  textContentType = 'none',
  autoFocus = false,
  value = '',
  keyboardType = 'default',
  onFunction = () => {},
  iconName = '',
  status = 'normal',
}) => {
  return (
    <>
      <Label>{label}</Label>
      <FieldCustom
        value={value}
        onChangeText={onFunction}
        placeholder="••••••••"
        placeholderTextColor="#9C9999"
        autoComplete="off"
        textContentType="password"
        keyboardType={keyboardType}
        autoCorrect={false}
        status={status}
      />
      <IconInput name="lock-question" size={25} color="#000" />
    </>
  );
};

export default Field;
