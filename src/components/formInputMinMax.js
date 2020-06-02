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

const FormInputMinMax = ({
  name,
  valueMin,
  valueMax,
  setMin,
  setMax,
  errorsInputMin,
  errorsInputMax,
  setFieldValue,
}) => (
  <InfoContainer>
    <Title>{name}</Title>
    <Description>Digite abaixo o valor mínimo:</Description>
    <TextInput
      keyboardType="numeric"
      placeholder="0"
      maxLength={16}
      error={errorsInputMin}
      value={valueMin}
      onChangeText={(value) => {
        handleDigits(setMin, value, setFieldValue);
      }}
    />
    {errorsInputMin && <ErrorText>{errorsInputMin}</ErrorText>}
    <Description>Digite abaixo o valor máximo:</Description>
    <TextInput
      keyboardType="numeric"
      placeholder="0"
      maxLength={16}
      error={errorsInputMax}
      value={valueMax}
      onChangeText={(value) => {
        handleDigits(setMax, value, setFieldValue);
      }}
    />
    {errorsInputMax && <ErrorText>{errorsInputMax}</ErrorText>}
  </InfoContainer>
);

export default FormInputMinMax;
