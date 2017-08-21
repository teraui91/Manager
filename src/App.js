import React, { Component } from 'react';
//import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import  reducers from './reducers';
// import LoginForm from './components/LoginForm';
import Router from './Router'


class App extends Component {
  componentWillMount () {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyDdYRw-S1sJnnYqQzeoH8BK16CNj0_NX4M",
      authDomain: "manager-31456.firebaseapp.com",
      databaseURL: "https://manager-31456.firebaseio.com",
      projectId: "manager-31456",
      storageBucket: "",
      messagingSenderId: "167923420768"
    };

    firebase.initializeApp(config);
  }
  render () {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;