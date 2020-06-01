import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  InfoContainer,
  Title,
  Description,
  Button,
  ButtonText,
} from '~/components/styles';

export default function Main() {
  const navigation = useNavigation();

  return (
    <Container>
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
