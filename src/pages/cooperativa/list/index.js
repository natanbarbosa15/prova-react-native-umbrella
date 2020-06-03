import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { getAllCooperativa } from '~/database/crud';

import {
  InfoContainer,
  Container,
  List,
  Title,
  Description,
  Button,
  ButtonText,
} from '~/components/styles';

export default function CooperativaList({ navigation }) {
  const [cooperativas, setCooperativas] = useState([]);

  useEffect(() => {
    var collection = [];
    function getData() {
      setCooperativas(
        JSON.parse(
          JSON.stringify(
            Array.prototype.slice.call(collection, 0, collection.length)
          )
        )
      );
    }
    function initRealmListener() {
      collection = getAllCooperativa();
      collection.addListener(getData);
    }
    function RemoveRealmListener() {
      collection.removeListener(getData);
    }
    initRealmListener();

    return () => {
      RemoveRealmListener();
    };
  }, []);

  return (
    <Container>
      <List>
        <FlatList
          data={cooperativas}
          keyExtractor={(item) => String(item.id)}
          extraData={cooperativas}
          renderItem={({ item: cooperativa }) => (
            <InfoContainer>
              <Title>{cooperativa.nome}</Title>
              <Description>Acesse a cooperativa {cooperativa.nome}</Description>
              <Button
                onPress={() =>
                  navigation.navigate('CooperativaRead', { cooperativa })
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
