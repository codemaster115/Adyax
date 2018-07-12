import React from 'react';

import { Dimensions } from 'react-native';

import Signup from './screens/auth/Signup';
import SignIn from './screens/auth/Signin';
import News from './screens/News';

import { DrawerItems, createDrawerNavigator, createStackNavigator } from 'react-navigation';

var { height, width } = Dimensions.get('window');

const AdyaxNavigator = createStackNavigator(
    {
        News: {
            screen: News,
            navigationOptions: {
                header: null
            }
        }
    },
    {
        initialRouteName: 'News',
        headerMode: 'none'
    }
)

const authNavigator = createStackNavigator(
    {
        Signup: {
            screen: Signup,
            navigationOptions: {
                header: null
            }
        },
        SignIn: {
            screen: SignIn,
            navigationOptions: {
                header: null
            }
        }
    },
    {
        initialRouteName: 'SignIn',
        headerMode: 'none'
    }
)

export const AppNavigator = createStackNavigator(
    {
        authNavigator: {
            screen: authNavigator,
            navigationOptions: {
                header: null
            }
        },
        AdyaxNavigator: {
            screen: AdyaxNavigator,
            navigationOptions: {
                header: null
            }
        }
    },
    {
        initialRouteName: 'authNavigator'
    }
);