import React, { Component } from 'react';
import { AppNavigator } from './src/AppNavigator';
import { Platform } from 'react-native';
import { Provider, connect } from 'react-redux';
import Expo from 'expo';
import configureStore, { AppReduxifyNavigator } from './src/store';

const store = configureStore();

const mapStateToProps = state => ({
  state: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(AppReduxifyNavigator);

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  async componentDidMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
      FontAwesome: require("@expo/vector-icons/fonts/FontAwesome.ttf"),
      'Comfortaa-Regular': require('./assets/fonts/Comfortaa-Regular.ttf'),
      'Comfortaa-Light': require('./assets/fonts/Comfortaa-Light.ttf'),
      'Comfortaa-Bold': require('./assets/fonts/Comfortaa-Bold.ttf'),
    });

    this.setState({ isLoading: false });
  }

  render() {
    if (this.state.isLoading) {
      return <Expo.AppLoading />
    }
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}