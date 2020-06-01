import 'react-native-gesture-handler';
import React from 'react';
import Routes from './routes';
import '~/config/StatusBarConfig';

if (__DEV__) {
  import('~/config/ReactotronConfig').then(() =>
    console.log('Reactotron Configured')
  );
}

const App = () => <Routes />;

export default App;
