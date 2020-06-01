import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

import {
  Container,
  InfoContainer,
  Title,
  Description,
  List,
} from '~/components/styles';

export default function PadraoRead() {
  const route = useRoute();
  const animal = route.params.animal;

  return (
    <SafeAreaView>
      <ScrollView>
        <Container>
          <List>
            <InfoContainer>
              <Title>Nome do Animal</Title>
              <Description>{animal.nome}</Description>
            </InfoContainer>
            <InfoContainer>
              <Title>Temperatura</Title>
              <Description>
                Mínimo = {Number(animal.temperaturaMin).toFixed(2)}
              </Description>
              <Description>
                Máximo = {Number(animal.temperaturaMax).toFixed(2)}
              </Description>
            </InfoContainer>
            <InfoContainer>
              <Title>Umidade</Title>
              <Description>
                Mínimo = {Number(animal.umidadeMin).toFixed(2)}
              </Description>
              <Description>
                Máximo = {Number(animal.umidadeMax).toFixed(2)}
              </Description>
            </InfoContainer>
            <InfoContainer>
              <Title>Velocidade do Ar</Title>
              <Description>
                Mínimo = {Number(animal.velocidadeArMin).toFixed(2)}
              </Description>
              <Description>
                Máximo = {Number(animal.velocidadeArMax).toFixed(2)}
              </Description>
            </InfoContainer>
            <InfoContainer>
              <Title>Dióxido de Carbono</Title>
              <Description>
                Mínimo = {Number(animal.dioxidoCarbMin).toFixed(2)}
              </Description>
              <Description>
                Máximo = {Number(animal.dioxidoCarbMax).toFixed(2)}
              </Description>
            </InfoContainer>
            <InfoContainer>
              <Title>Amônia</Title>
              <Description>
                Mínimo = {Number(animal.amoniaMin).toFixed(2)}
              </Description>
              <Description>
                Máximo = {Number(animal.amoniaMax).toFixed(2)}
              </Description>
            </InfoContainer>
            <InfoContainer>
              <Title>Sulfeto de Hidrôgenio</Title>
              <Description>
                Mínimo = {Number(animal.sulfetoHidroMin).toFixed(2)}
              </Description>
              <Description>
                Máximo = {Number(animal.sulfetoHidroMax).toFixed(2)}
              </Description>
            </InfoContainer>
          </List>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
