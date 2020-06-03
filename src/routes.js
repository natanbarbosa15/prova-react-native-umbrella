import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  HeaderButtons,
  HeaderButton,
  Item,
  OverflowMenuProvider,
} from 'react-navigation-header-buttons';
import FontAwesome from 'react-native-vector-icons/Feather';
import { deletePadrao, deleteCooperativa, deleteAnimal } from '~/database/crud';

const AppStack = createStackNavigator();

import Main from './pages/main';
import PadraoCreate from './pages/padrao/create';
import PadraoList from './pages/padrao/list';
import PadraoRead from './pages/padrao/read';
import PadraoUpdate from './pages/padrao/update';
import CooperativaCreate from './pages/cooperativa/create';
import CooperativaList from './pages/cooperativa/list';
import CooperativaRead from './pages/cooperativa/read';
import CooperativaUpdate from './pages/cooperativa/update';
import AnimalCreate from './pages/animal/create';
import AnimalList from './pages/animal/list';
import AnimalRead from './pages/animal/read';
import AnimalUpdate from './pages/animal/update';

export default function Routes() {
  const FeatherHeaderButton = (props) => (
    <HeaderButton
      {...props}
      IconComponent={FontAwesome}
      iconSize={30}
      color="#FFF"
    />
  );

  function navigateToPadraoCreate(navigation) {
    return navigation.navigate('PadraoCreate');
  }

  function navigateToPadraoUpdate(navigation, animal) {
    return navigation.navigate('PadraoUpdate', { animal });
  }

  function navigatePadraoDelete(navigation, animal) {
    deletePadrao(animal.id);
    return navigation.navigate('PadraoList');
  }

  function navigateToCooperativaCreate(navigation) {
    return navigation.navigate('CooperativaCreate');
  }

  function navigateToCooperativaUpdate(navigation, cooperativa) {
    return navigation.navigate('CooperativaUpdate', { cooperativa });
  }

  function navigateCooperativaDelete(navigation, cooperativa) {
    deleteCooperativa(cooperativa.id);
    return navigation.navigate('CooperativaList');
  }

  function navigateToAnimalCreate(navigation, cooperativaId) {
    return navigation.navigate('AnimalCreate', { cooperativaId });
  }

  function navigateToAnimalUpdate(navigation, animal, cooperativaId) {
    return navigation.navigate('AnimalUpdate', { animal, cooperativaId });
  }

  function navigateAnimalDelete(navigation, animal, cooperativaId) {
    deleteAnimal(animal.id, cooperativaId);
    return navigation.navigate('AnimalList', { cooperativaId });
  }

  return (
    <NavigationContainer>
      <OverflowMenuProvider>
        <AppStack.Navigator
          screenOptions={{
            headerShown: true,
            headerStyle: { backgroundColor: '#DA552F' },
            headerTintColor: '#FFF',
          }}
        >
          <AppStack.Screen name="Menu" component={Main} />
          <AppStack.Screen
            name="PadraoList"
            component={PadraoList}
            options={({ navigation }) => ({
              title: 'Padrões',
              headerRight: () => (
                <HeaderButtons HeaderButtonComponent={FeatherHeaderButton}>
                  <Item
                    title="Adicionar"
                    iconName="plus"
                    onPress={() => navigateToPadraoCreate(navigation)}
                  />
                </HeaderButtons>
              ),
            })}
          />
          <AppStack.Screen
            name="PadraoCreate"
            component={PadraoCreate}
            options={{
              title: 'Adicionar Padrões de Animal',
            }}
          />
          <AppStack.Screen
            name="PadraoRead"
            component={PadraoRead}
            options={({ navigation, route }) => ({
              title: route.params.animal.nome,
              headerRight: () => (
                <HeaderButtons HeaderButtonComponent={FeatherHeaderButton}>
                  <Item
                    title="Atualizar"
                    iconName="edit"
                    onPress={() =>
                      navigateToPadraoUpdate(navigation, route.params.animal)
                    }
                  />
                  <Item
                    title="Remover"
                    iconName="x-circle"
                    onPress={() =>
                      navigatePadraoDelete(navigation, route.params.animal)
                    }
                  />
                </HeaderButtons>
              ),
            })}
          />
          <AppStack.Screen
            name="PadraoUpdate"
            component={PadraoUpdate}
            options={({ route }) => ({
              title: String(`Atualizar ${route.params.animal.nome}`),
            })}
          />
          <AppStack.Screen
            name="CooperativaList"
            component={CooperativaList}
            options={({ navigation }) => ({
              title: 'Cooperativas',
              headerRight: () => (
                <HeaderButtons HeaderButtonComponent={FeatherHeaderButton}>
                  <Item
                    title="Adicionar"
                    iconName="plus"
                    onPress={() => navigateToCooperativaCreate(navigation)}
                  />
                </HeaderButtons>
              ),
            })}
          />
          <AppStack.Screen
            name="CooperativaCreate"
            component={CooperativaCreate}
            options={{
              title: 'Adicionar Cooperativa',
            }}
          />
          <AppStack.Screen
            name="CooperativaRead"
            component={CooperativaRead}
            options={({ navigation, route }) => ({
              title: route.params.cooperativa.nome,
              headerRight: () => (
                <HeaderButtons HeaderButtonComponent={FeatherHeaderButton}>
                  <Item
                    title="Atualizar"
                    iconName="edit"
                    onPress={() =>
                      navigateToCooperativaUpdate(
                        navigation,
                        route.params.cooperativa
                      )
                    }
                  />
                  <Item
                    title="Remover"
                    iconName="x-circle"
                    onPress={() =>
                      navigateCooperativaDelete(
                        navigation,
                        route.params.cooperativa
                      )
                    }
                  />
                </HeaderButtons>
              ),
            })}
          />
          <AppStack.Screen
            name="CooperativaUpdate"
            component={CooperativaUpdate}
            options={({ route }) => ({
              title: String(`Atualizar ${route.params.cooperativa.nome}`),
            })}
          />
          <AppStack.Screen
            name="AnimalList"
            component={AnimalList}
            options={({ navigation, route }) => ({
              title: 'Animais',
              headerRight: () => (
                <HeaderButtons HeaderButtonComponent={FeatherHeaderButton}>
                  <Item
                    title="Adicionar"
                    iconName="plus"
                    onPress={() =>
                      navigateToAnimalCreate(
                        navigation,
                        route.params.cooperativaId
                      )
                    }
                  />
                </HeaderButtons>
              ),
            })}
          />
          <AppStack.Screen
            name="AnimalCreate"
            component={AnimalCreate}
            options={{
              title: 'Adicionar Animal',
            }}
          />
          <AppStack.Screen
            name="AnimalRead"
            component={AnimalRead}
            options={({ navigation, route }) => ({
              title: route.params.animal.nome,
              headerRight: () => (
                <HeaderButtons HeaderButtonComponent={FeatherHeaderButton}>
                  <Item
                    title="Atualizar"
                    iconName="edit"
                    onPress={() =>
                      navigateToAnimalUpdate(
                        navigation,
                        route.params.animal,
                        route.params.cooperativaId
                      )
                    }
                  />
                  <Item
                    title="Remover"
                    iconName="x-circle"
                    onPress={() =>
                      navigateAnimalDelete(
                        navigation,
                        route.params.animal,
                        route.params.cooperativaId
                      )
                    }
                  />
                </HeaderButtons>
              ),
            })}
          />
          <AppStack.Screen
            name="AnimalUpdate"
            component={AnimalUpdate}
            options={({ route }) => ({
              title: String(`Atualizar ${route.params.animal.nome}`),
            })}
          />
        </AppStack.Navigator>
      </OverflowMenuProvider>
    </NavigationContainer>
  );
}
