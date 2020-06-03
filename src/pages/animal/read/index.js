import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import {
  Container,
  InfoContainer,
  Title,
  Description,
  List,
  ErrorText,
} from '~/components/styles';

export default function AnimalRead({ route }) {
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
                Valor = {Number(animal.temperatura).toFixed(2)}
              </Description>
              {animal.temperatura > animal.padrao.temperaturaMax && (
                <ErrorText>
                  Temperatura acima do padrão de ={' '}
                  {animal.padrao.temperaturaMax}
                </ErrorText>
              )}
              {animal.temperatura < animal.padrao.temperaturaMin && (
                <ErrorText>
                  Temperatura abaixo do padrão de ={' '}
                  {animal.padrao.temperaturaMin}
                </ErrorText>
              )}
            </InfoContainer>
            <InfoContainer>
              <Title>Umidade</Title>
              <Description>
                Valor = {Number(animal.umidade).toFixed(2)}
              </Description>
              {animal.umidade > animal.padrao.umidadeMax && (
                <ErrorText>
                  Umidade acima do padrão de = {animal.padrao.umidadeMax}
                </ErrorText>
              )}
              {animal.umidade < animal.padrao.umidadeMin && (
                <ErrorText>
                  Umidade abaixo do padrão de = {animal.padrao.umidadeMin}
                </ErrorText>
              )}
            </InfoContainer>
            <InfoContainer>
              <Title>Velocidade do Ar</Title>
              <Description>
                Valor = {Number(animal.velocidadeAr).toFixed(2)}
              </Description>
              {animal.velocidadeAr > animal.padrao.velocidadeArMax && (
                <ErrorText>
                  Velocidade do Ar acima do padrão de ={' '}
                  {animal.padrao.velocidadeArMax}
                </ErrorText>
              )}
              {animal.velocidadeAr < animal.padrao.velocidadeArMin && (
                <ErrorText>
                  Velocidade do Ar abaixo do padrão de ={' '}
                  {animal.padrao.velocidadeArMin}
                </ErrorText>
              )}
            </InfoContainer>
            <InfoContainer>
              <Title>Dióxido de Carbono</Title>
              <Description>
                Valor = {Number(animal.dioxidoCarb).toFixed(2)}
              </Description>
              {animal.dioxidoCarb > animal.padrao.dioxidoCarbMax && (
                <ErrorText>
                  Dióxido de Carbono acima do padrão de ={' '}
                  {animal.padrao.dioxidoCarbMax}
                </ErrorText>
              )}
              {animal.dioxidoCarb < animal.padrao.dioxidoCarbMin && (
                <ErrorText>
                  Dióxido de Carbono abaixo do padrão de ={' '}
                  {animal.padrao.dioxidoCarbMin}
                </ErrorText>
              )}
            </InfoContainer>
            <InfoContainer>
              <Title>Amônia</Title>
              <Description>
                Valor = {Number(animal.amonia).toFixed(2)}
              </Description>
              {animal.amonia > animal.padrao.amoniaMax && (
                <ErrorText>
                  Amônia acima do padrão de = {animal.padrao.amoniaMax}
                </ErrorText>
              )}
              {animal.amonia < animal.padrao.amoniaMin && (
                <ErrorText>
                  Amônia abaixo do padrão de = {animal.padrao.amoniaMin}
                </ErrorText>
              )}
            </InfoContainer>
            <InfoContainer>
              <Title>Sulfeto de Hidrôgenio</Title>
              <Description>
                Valor = {Number(animal.sulfetoHidro).toFixed(2)}
              </Description>
              {animal.sulfetoHidro > animal.padrao.sulfetoHidroMax && (
                <ErrorText>
                  Sulfeto de Hidrôgenio acima do padrão de ={' '}
                  {animal.padrao.sulfetoHidroMax}
                </ErrorText>
              )}
              {animal.sulfetoHidro < animal.padrao.sulfetoHidroMin && (
                <ErrorText>
                  Sulfeto de Hidrôgenio abaixo do padrão de ={' '}
                  {animal.padrao.sulfetoHidroMin}
                </ErrorText>
              )}
            </InfoContainer>
          </List>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
