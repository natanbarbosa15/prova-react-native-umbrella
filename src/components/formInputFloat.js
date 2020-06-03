import React from 'react';

import {
  InfoContainer,
  Title,
  Description,
  TextInput,
  ErrorText,
} from './styles';

function handleDigits(id, value, setFieldValue) {
  var temp = value.toString();
  // Replace comma with dot
  temp = temp.replace(/,/g, '.').replace(/ /g, '');
  // If has more than 2 decimal places round value to 2 decimal places
  if (temp.includes('.')) {
    if (temp.split('.')[1].length > 2) {
      temp = temp.slice(0, -1);
    }
  }
  setFieldValue(id, temp);
}

const FormInputFloat = ({
  name,
  value,
  setValue,
  errorsInput,
  setFieldValue,
}) => (
  <InfoContainer>
    <Title>{name}</Title>
    <Description>Digite abaixo o valor:</Description>
    <TextInput
      keyboardType="numeric"
      placeholder="0"
      maxLength={16}
      error={errorsInput}
      value={value}
      onChangeText={(input) => {
        handleDigits(setValue, input, setFieldValue);
      }}
    />
    {errorsInput && <ErrorText>{errorsInput}</ErrorText>}
  </InfoContainer>
);

export default FormInputFloat;
