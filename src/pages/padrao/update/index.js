import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Formik } from 'formik';
import { updatePadrao } from '~/database/crud';

import FormInputMinMax from '~/components/formInputMinMax';
import {
  Container,
  List,
  Title,
  Description,
  TextInput,
  ErrorText,
  InfoContainer,
  Button,
  ButtonText,
} from '~/components/styles';

export default function PadraoUpdate({ route, navigation }) {
  const animal = route.params.animal;
  const yup = require('yup');
  const doubleRegex = /^([-]){0,1}\d+(\.\d*){0,1}$/;

  function submitHandler(values) {
    values.temperaturaMin = Number(
      parseFloat(values.temperaturaMin).toFixed(2)
    );
    values.temperaturaMax = Number(
      parseFloat(values.temperaturaMax).toFixed(2)
    );
    values.umidadeMin = Number(parseFloat(values.umidadeMin).toFixed(2));
    values.umidadeMax = Number(parseFloat(values.umidadeMax).toFixed(2));
    values.velocidadeArMin = Number(
      parseFloat(values.velocidadeArMin).toFixed(2)
    );
    values.velocidadeArMax = Number(
      parseFloat(values.velocidadeArMax).toFixed(2)
    );
    values.dioxidoCarbMin = Number(
      parseFloat(values.dioxidoCarbMin).toFixed(2)
    );
    values.dioxidoCarbMax = Number(
      parseFloat(values.dioxidoCarbMax).toFixed(2)
    );
    values.amoniaMin = Number(parseFloat(values.amoniaMin).toFixed(2));
    values.amoniaMax = Number(parseFloat(values.amoniaMax).toFixed(2));
    values.sulfetoHidroMin = Number(
      parseFloat(values.sulfetoHidroMin).toFixed(2)
    );
    values.sulfetoHidroMax = Number(
      parseFloat(values.sulfetoHidroMax).toFixed(2)
    );
    values.id = animal.id;

    updatePadrao(values);
    navigation.navigate('PadraoList');
  }

  return (
    <Formik
      initialValues={{
        nome: String(animal.nome),
        temperaturaMin: String(animal.temperaturaMin),
        temperaturaMax: String(animal.temperaturaMax),
        umidadeMin: String(animal.umidadeMin),
        umidadeMax: String(animal.umidadeMax),
        velocidadeArMin: String(animal.velocidadeArMin),
        velocidadeArMax: String(animal.velocidadeArMax),
        dioxidoCarbMin: String(animal.dioxidoCarbMin),
        dioxidoCarbMax: String(animal.dioxidoCarbMax),
        amoniaMin: String(animal.amoniaMin),
        amoniaMax: String(animal.amoniaMax),
        sulfetoHidroMin: String(animal.sulfetoHidroMin),
        sulfetoHidroMax: String(animal.sulfetoHidroMax),
      }}
      validationSchema={yup.object().shape({
        nome: yup.string().required('Preencha o campo'),
        temperaturaMin: yup
          .string()
          .required('Preencha o campo')
          .matches(
            doubleRegex,
            'Verifique se o número está correto. Digite novamente o número.'
          ),
        temperaturaMax: yup
          .string()
          .required('Preencha o campo')
          .matches(
            doubleRegex,
            'Verifique se o número está correto. Digite novamente o número.'
          ),
        umidadeMin: yup
          .string()
          .required('Preencha o campo')
          .matches(
            doubleRegex,
            'Verifique se o número está correto. Digite novamente o número.'
          ),
        umidadeMax: yup
          .string()
          .required('Preencha o campo')
          .matches(
            doubleRegex,
            'Verifique se o número está correto. Digite novamente o número.'
          ),
        velocidadeArMin: yup
          .string()
          .required('Preencha o campo')
          .matches(
            doubleRegex,
            'Verifique se o número está correto. Digite novamente o número.'
          ),
        velocidadeArMax: yup
          .string()
          .required('Preencha o campo')
          .matches(
            doubleRegex,
            'Verifique se o número está correto. Digite novamente o número.'
          ),
        dioxidoCarbMin: yup
          .string()
          .required('Preencha o campo')
          .matches(
            doubleRegex,
            'Verifique se o número está correto. Digite novamente o número.'
          ),
        dioxidoCarbMax: yup
          .string()
          .required('Preencha o campo')
          .matches(
            doubleRegex,
            'Verifique se o número está correto. Digite novamente o número.'
          ),
        amoniaMin: yup
          .string()
          .required('Preencha o campo')
          .matches(
            doubleRegex,
            'Verifique se o número está correto. Digite novamente o número.'
          ),
        amoniaMax: yup
          .string()
          .required('Preencha o campo')
          .matches(
            doubleRegex,
            'Verifique se o número está correto. Digite novamente o número.'
          ),
        sulfetoHidroMin: yup
          .string()
          .required('Preencha o campo')
          .matches(
            doubleRegex,
            'Verifique se o número está correto. Digite novamente o número.'
          ),
        sulfetoHidroMax: yup
          .string()
          .required('Preencha o campo')
          .matches(
            doubleRegex,
            'Verifique se o número está correto. Digite novamente o número.'
          ),
      })}
      onSubmit={(values) => submitHandler(values)}
    >
      {({ handleChange, handleSubmit, values, errors }) => (
        <SafeAreaView>
          <ScrollView>
            <Container>
              <List>
                <InfoContainer>
                  <Title>Animal</Title>
                  <Description>Digite abaixo o nome:</Description>
                  <TextInput
                    placeholder="Nome"
                    maxLength={64}
                    error={errors.nome}
                    value={values.nome}
                    onChangeText={handleChange('nome')}
                  />
                  {errors.nome && <ErrorText>{errors.nome}</ErrorText>}
                </InfoContainer>
                <FormInputMinMax
                  name="Temperatura"
                  valueMin={values.temperaturaMin}
                  valueMax={values.temperaturaMax}
                  setMin="temperaturaMin"
                  setMax="temperaturaMax"
                  errorsInputMin={errors.temperaturaMin}
                  errorsInputMax={errors.temperaturaMax}
                  handleChange={handleChange}
                />
                <FormInputMinMax
                  name="Umidade"
                  valueMin={values.umidadeMin}
                  valueMax={values.umidadeMax}
                  setMin="umidadeMin"
                  setMax="umidadeMax"
                  errorsInputMin={errors.umidadeMin}
                  errorsInputMax={errors.umidadeMax}
                  handleChange={handleChange}
                />
                <FormInputMinMax
                  name="Velocidade do Ar"
                  valueMin={values.velocidadeArMin}
                  valueMax={values.velocidadeArMax}
                  setMin="velocidadeArMin"
                  setMax="velocidadeArMax"
                  errorsInputMin={errors.velocidadeArMin}
                  errorsInputMax={errors.velocidadeArMax}
                  handleChange={handleChange}
                />
                <FormInputMinMax
                  name="Dióxido de Carbono"
                  valueMin={values.dioxidoCarbMin}
                  valueMax={values.dioxidoCarbMax}
                  setMin="dioxidoCarbMin"
                  setMax="dioxidoCarbMax"
                  errorsInputMin={errors.dioxidoCarbMin}
                  errorsInputMax={errors.dioxidoCarbMax}
                  handleChange={handleChange}
                />
                <FormInputMinMax
                  name="Amônia"
                  valueMin={values.amoniaMin}
                  valueMax={values.amoniaMax}
                  setMin="amoniaMin"
                  setMax="amoniaMax"
                  errorsInputMin={errors.amoniaMin}
                  errorsInputMax={errors.amoniaMax}
                  handleChange={handleChange}
                />
                <FormInputMinMax
                  name="Sulfeto de Hidrogênio"
                  valueMin={values.sulfetoHidroMin}
                  valueMax={values.sulfetoHidroMax}
                  setMin="sulfetoHidroMin"
                  setMax="sulfetoHidroMax"
                  errorsInputMin={errors.sulfetoHidroMin}
                  errorsInputMax={errors.sulfetoHidroMax}
                  handleChange={handleChange}
                />
                <Button onPress={handleSubmit}>
                  <ButtonText>Atualizar</ButtonText>
                </Button>
              </List>
            </Container>
          </ScrollView>
        </SafeAreaView>
      )}
    </Formik>
  );
}
