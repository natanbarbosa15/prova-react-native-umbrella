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
import { deletePadrao } from '~/database/crud';

const AppStack = createStackNavigator();

import Main from './pages/main';
import PadraoCreate from './pages/padrao/create';
import PadraoList from './pages/padrao/list';
import PadraoRead from './pages/padrao/read';
import PadraoUpdate from './pages/padrao/update';

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

  function navigateDeletePadrao(navigation, animal) {
    deletePadrao(animal.id);
    return navigation.navigate('PadraoList');
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
                      navigateDeletePadrao(navigation, route.params.animal)
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
        </AppStack.Navigator>
      </OverflowMenuProvider>
    </NavigationContainer>
  );
}
