import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {Label, SelectContainer, IconInput} from './styledComponents';

const Select = ({
  label = '',
  selectedValue,
  itens = [],
  iconName = '',
}) => {
  const [selectedValueState, setSelectedValueState] = useState(selectedValue)
  return (
    <>
      <Label>{label}</Label>
      <SelectContainer>
        <Picker
          selectedValue={selectedValueState}
          onValueChange={(itemValue, itemIndex) => setSelectedValueState(itemValue)}>
          {itens.map(item => (
            <Picker.Item
              key={item.value}
              label={item.label}
              value={item.value}
            />
          ))}
        </Picker>
        <IconInput name={iconName} size={25} color="#000" />
      </SelectContainer>
    </>
  );
};

export default Select;
