import React from 'react';
import { StyleSheet } from 'react-native';
import Navigation from './src/routes/Drawer'
import { Provider } from 'react-redux'
import Store from './src/store/configureStore'
import { addMoney } from './src/actions/balanceActions'
import { addTransaction } from './src/actions/transactionActions';

const store = Store()
store.subscribe(() => console.log(store.getState()))
export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

