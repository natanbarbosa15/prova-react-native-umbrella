import React from 'react';

import {
  InfoContainer,
  Title,
  Description,
  TextInput,
  ErrorText,
} from './styles';

const FormInputMinMax = ({
  name,
  valueMin,
  valueMax,
  setMin,
  setMax,
  errorsInputMin,
  errorsInputMax,
  handleChange,
}) => (
  <InfoContainer>
    <Title>{name}</Title>
    <Description>Digite abaixo o valor mínimo:</Description>
    <TextInput
      keyboardType="numeric"
      placeholder="0"
      maxLength={16}
      error={errorsInputMin}
      value={valueMin.toString().replace(/,/g, '.').replace(/ /g, '')}
      onChangeText={handleChange(setMin)}
    />
    {errorsInputMin && <ErrorText>{errorsInputMin}</ErrorText>}
    <Description>Digite abaixo o valor máximo:</Description>
    <TextInput
      keyboardType="numeric"
      placeholder="0"
      maxLength={16}
      error={errorsInputMax}
      value={valueMax.toString().replace(/,/g, '.').replace(/ /g, '')}
      onChangeText={handleChange(setMax)}
    />
    {errorsInputMax && <ErrorText>{errorsInputMax}</ErrorText>}
  </InfoContainer>
);

export default FormInputMinMax;
