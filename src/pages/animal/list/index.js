import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { getAllAnimais } from '~/database/crud';

import {
  InfoContainer,
  Container,
  List,
  Title,
  Description,
  Button,
  ButtonText,
} from '~/components/styles';

export default function AnimalList({ route, navigation }) {
  const cooperativaId = route.params.cooperativaId;
  const [animais, setAnimais] = useState([]);

  useEffect(() => {
    var collection = [];
    function getData() {
      setAnimais(
        JSON.parse(
          JSON.stringify(
            Array.prototype.slice.call(collection, 0, collection.length)
          )
        )
      );
    }
    function initRealmListener() {
      collection = getAllAnimais(cooperativaId);
      collection.addListener(getData);
    }
    function RemoveRealmListener() {
      collection.removeListener(getData);
    }
    initRealmListener();

    return () => {
      RemoveRealmListener();
    };
  }, [cooperativaId]);

  return (
    <Container>
      <List>
        <FlatList
          data={animais}
          keyExtractor={(item) => String(item.id)}
          extraData={animais}
          renderItem={({ item: animal }) => (
            <InfoContainer>
              <Title>{animal.nome}</Title>
              <Description>
                Acesse os dados do animal: {animal.nome}
              </Description>
              <Button
                onPress={() =>
                  navigation.navigate('AnimalRead', { animal, cooperativaId })
                }
              >
                <ButtonText>Acessar</ButtonText>
              </Button>
            </InfoContainer>
          )}
        />
      </List>
    </Container>
  );
}
