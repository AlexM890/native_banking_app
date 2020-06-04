import React from 'react';
import { StyleSheet } from 'react-native';
import Navigation from './src/routes/Drawer'
import { Provider } from 'react-redux'
import Store from './src/store/configureStore'
import { addMoney } from './src/actions/balanceActions'
import { addTransaction } from './src/actions/transactionActions';

const store = Store()
store.subscribe(() => console.log(store.getState()))
store.dispatch(addMoney(1200))
store.dispatch(addTransaction({amount:"900", memo:"this shit", to:"him", transactionType:"deposit"}))
export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

