import React from 'react';

import {
  Container,
  InfoContainer,
  Title,
  Description,
  Button,
  ButtonText,
} from '~/components/styles';

export default function Main({ navigation }) {
  return (
    <Container>
      <InfoContainer>
        <Title>Cooperativas</Title>
        <Description>Acesse as cooperativas</Description>
        <Button onPress={() => navigation.navigate('CooperativaList')}>
          <ButtonText>Acessar</ButtonText>
        </Button>
      </InfoContainer>
      <InfoContainer>
        <Title>Padrões de Monitoramento</Title>
        <Description>
          Acesse os valores padrões de margem dos dados de monitoramento
        </Description>
        <Button onPress={() => navigation.navigate('PadraoList')}>
          <ButtonText>Acessar</ButtonText>
        </Button>
      </InfoContainer>
    </Container>
  );
}
