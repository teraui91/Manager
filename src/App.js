import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import  reducers from './reducers';
import LoginForm from './components/LoginForm';

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
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;