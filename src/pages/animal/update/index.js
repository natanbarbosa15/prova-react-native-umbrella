import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { Formik } from 'formik';
import { updateAnimal, getAllPadrao } from '~/database/crud';

import FormInputFloat from '~/components/formInputFloat';
import {
  Container,
  InfoContainer,
  Title,
  Description,
  TextInput,
  ErrorText,
  ErrorTitle,
  Button,
  ButtonText,
  List,
} from '~/components/styles';

export default function AnimalCreate({ route, navigation }) {
  const animal = route.params.animal;
  const cooperativaId = route.params.cooperativaId;
  const yup = require('yup');
  const doubleRegex = /^([-]){0,1}\d+(\.\d+){0,1}$/;
  const [padraoList, setPadraoList] = useState([]);

  function submitHandler(values) {
    values.temperatura = Number(parseFloat(values.temperatura).toFixed(2));
    values.umidade = Number(parseFloat(values.umidade).toFixed(2));
    values.velocidadeAr = Number(parseFloat(values.velocidadeAr).toFixed(2));
    values.dioxidoCarb = Number(parseFloat(values.dioxidoCarb).toFixed(2));
    values.amonia = Number(parseFloat(values.amonia).toFixed(2));
    values.sulfetoHidro = Number(parseFloat(values.sulfetoHidro).toFixed(2));

    values.cooperativaId = cooperativaId;
    values.id = animal.id;

    const padrao = padraoList.find((item) => item.nome === values.tipoAnimal);

    delete values.tipoAnimal;

    updateAnimal(values, padrao.id);
    navigation.navigate('AnimalList', { cooperativaId });
  }

  useEffect(() => {
    var collection = [];
    function getData() {
      collection = getAllPadrao();
      setPadraoList(
        JSON.parse(
          JSON.stringify(
            Array.prototype.slice.call(collection, 0, collection.length)
          )
        )
      );
    }
    getData();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <Container>
          {padraoList.length > 0 ? (
            <Formik
              initialValues={{
                nome: String(animal.nome),
                tipoAnimal: String(animal.padrao.nome),
                temperatura: String(animal.temperatura),
                umidade: String(animal.umidade),
                velocidadeAr: String(animal.velocidadeAr),
                dioxidoCarb: String(animal.dioxidoCarb),
                amonia: String(animal.amonia),
                sulfetoHidro: String(animal.sulfetoHidro),
              }}
              validationSchema={yup.object().shape({
                nome: yup.string().required('Preencha o campo'),
                tipoAnimal: yup.string().required('Preencha o campo'),
                temperatura: yup
                  .string()
                  .required('Preencha o campo')
                  .matches(
                    doubleRegex,
                    'Verifique se o número está correto. Digite novamente o número.'
                  ),
                umidade: yup
                  .string()
                  .required('Preencha o campo')
                  .matches(
                    doubleRegex,
                    'Verifique se o número está correto. Digite novamente o número.'
                  ),
                velocidadeAr: yup
                  .string()
                  .required('Preencha o campo')
                  .matches(
                    doubleRegex,
                    'Verifique se o número está correto. Digite novamente o número.'
                  ),
                dioxidoCarb: yup
                  .string()
                  .required('Preencha o campo')
                  .matches(
                    doubleRegex,
                    'Verifique se o número está correto. Digite novamente o número.'
                  ),
                amonia: yup
                  .string()
                  .required('Preencha o campo')
                  .matches(
                    doubleRegex,
                    'Verifique se o número está correto. Digite novamente o número.'
                  ),
                sulfetoHidro: yup
                  .string()
                  .required('Preencha o campo')
                  .matches(
                    doubleRegex,
                    'Verifique se o número está correto. Digite novamente o número.'
                  ),
              })}
              onSubmit={(values) => submitHandler(values)}
            >
              {({
                handleChange,
                handleSubmit,
                setFieldValue,
                values,
                errors,
              }) => (
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
                  <InfoContainer>
                    <Title>Tipo de Animal</Title>
                    <Description>Selecione o tipo de animal:</Description>
                    <Picker
                      mode="dropdown"
                      selectedValue={values.tipoAnimal}
                      error={errors.tipoAnimal}
                      onValueChange={(itemValue, itemIndex) => {
                        setFieldValue('tipoAnimal', itemValue);
                      }}
                    >
                      {padraoList.map((item) => {
                        return (
                          <Picker.Item
                            label={item.nome}
                            value={item.nome}
                            key={item.nome}
                          />
                        );
                      })}
                    </Picker>
                    {errors.tipoAnimal && (
                      <ErrorText>{errors.tipoAnimal}</ErrorText>
                    )}
                  </InfoContainer>
                  <FormInputFloat
                    name="Temperatura"
                    value={values.temperatura}
                    setValue="temperatura"
                    errorsInput={errors.temperatura}
                    setFieldValue={setFieldValue}
                  />
                  <FormInputFloat
                    name="Umidade"
                    value={values.umidade}
                    setValue="umidade"
                    errorsInput={errors.umidade}
                    setFieldValue={setFieldValue}
                  />
                  <FormInputFloat
                    name="Velocidade do Ar"
                    value={values.velocidadeAr}
                    setValue="velocidadeAr"
                    errorsInput={errors.velocidadeAr}
                    setFieldValue={setFieldValue}
                  />
                  <FormInputFloat
                    name="Dióxido de Carbono"
                    value={values.dioxidoCarb}
                    setValue="dioxidoCarb"
                    errorsInput={errors.dioxidoCarb}
                    setFieldValue={setFieldValue}
                  />
                  <FormInputFloat
                    name="Amônia"
                    value={values.amonia}
                    setValue="amonia"
                    errorsInput={errors.amonia}
                    setFieldValue={setFieldValue}
                  />
                  <FormInputFloat
                    name="Sulfeto de Hidrogênio"
                    value={values.sulfetoHidro}
                    setValue="sulfetoHidro"
                    errorsInput={errors.sulfetoHidro}
                    setFieldValue={setFieldValue}
                  />
                  <Button onPress={handleSubmit}>
                    <ButtonText>Atualizar</ButtonText>
                  </Button>
                </List>
              )}
            </Formik>
          ) : (
            <InfoContainer>
              <ErrorTitle>
                Cadastre um padrão de monitoramento de animal primeiro.
              </ErrorTitle>
            </InfoContainer>
          )}
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
