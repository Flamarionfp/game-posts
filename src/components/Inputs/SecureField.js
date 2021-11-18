import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {Label, FieldCustom, IconInput, EyeIcon} from './styledComponents';

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

  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  return (
    <>
      <Label>{label}</Label>
      <FieldCustom
        value={value}
        onChangeText={onFunction}
        placeholder="••••••••"
        secureTextEntry={!isPasswordVisible}
        placeholderTextColor="#9C9999"
        autoComplete="off"
        textContentType="password"
        keyboardType={keyboardType}
        autoCorrect={false}
        status={status}
      />

      <IconInput name="lock-question" size={25} color="#000" />
      <TouchableOpacity onPress={() => {setIsPasswordVisible(!isPasswordVisible)}}>
        <EyeIcon name={isPasswordVisible ? 'eye-off' : 'eye'} size={25} color="#000" />
      </TouchableOpacity>
    </>
  );
};

export default Field;
