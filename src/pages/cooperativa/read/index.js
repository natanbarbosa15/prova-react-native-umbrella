import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import {
  Container,
  InfoContainer,
  Title,
  Description,
  List,
  Button,
  ButtonText,
} from '~/components/styles';

export default function CooperativaRead({ route, navigation }) {
  const cooperativa = route.params.cooperativa;

  function navigateToAnimaisList() {
    navigation.navigate('AnimalList', { cooperativaId: cooperativa.id });
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Container>
          <List>
            <InfoContainer>
              <Title>Nome da cooperativa</Title>
              <Description>{cooperativa.nome}</Description>
              <Button onPress={navigateToAnimaisList}>
                <ButtonText>Animais</ButtonText>
              </Button>
            </InfoContainer>
          </List>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
