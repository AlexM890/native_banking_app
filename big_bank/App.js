import React from 'react';
import { StyleSheet } from 'react-native';
import Navigation from './src/routes/TabNavigation'
import { Provider } from 'react-redux'
import Store from './src/store/configureStore'
import { addMoney } from './src/actions/balanceActions'

const store = Store()
store.subscribe(() => console.log(store.getState()))
store.dispatch(1200)

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
