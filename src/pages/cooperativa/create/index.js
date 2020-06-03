import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Formik } from 'formik';
import { createCooperativa } from '~/database/crud';

import {
  Container,
  InfoContainer,
  Title,
  Description,
  TextInput,
  ErrorText,
  Button,
  ButtonText,
  List,
} from '~/components/styles';

export default function CooperativaCreate({ navigation }) {
  const yup = require('yup');

  function submitHandler(values) {
    createCooperativa(values);
    navigation.navigate('CooperativaList');
  }

  return (
    <Formik
      initialValues={{
        nome: '',
      }}
      validationSchema={yup.object().shape({
        nome: yup.string().required('Preencha o campo'),
      })}
      onSubmit={(values) => submitHandler(values)}
    >
      {({ handleChange, handleSubmit, values, errors }) => (
        <SafeAreaView>
          <ScrollView>
            <Container>
              <List>
                <InfoContainer>
                  <Title>Cooperativa</Title>
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
                <Button onPress={handleSubmit}>
                  <ButtonText>Adicionar</ButtonText>
                </Button>
              </List>
            </Container>
          </ScrollView>
        </SafeAreaView>
      )}
    </Formik>
  );
}
