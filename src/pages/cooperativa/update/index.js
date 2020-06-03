import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Formik } from 'formik';
import { updateCooperativa } from '~/database/crud';

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

export default function CooperativaUpdate({ route, navigation }) {
  const cooperativa = route.params.cooperativa;
  const yup = require('yup');

  function submitHandler(values) {
    values.id = cooperativa.id;
    updateCooperativa(values);
    navigation.navigate('CooperativaList');
  }

  return (
    <Formik
      initialValues={{
        nome: String(cooperativa.nome),
      }}
      validationSchema={yup.object().shape({
        nome: yup.string().required('Preencha o campo'),
      })}
      onSubmit={(values) => submitHandler(values)}
    >
      {({ handleChange, handleSubmit, setFieldValue, values, errors }) => (
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
