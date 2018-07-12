import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { combineReducers } from 'redux';
import {
    createNavigationReducer,               // handles #2 above
    createReactNavigationReduxMiddleware,  // handles #4 above
    reduxifyNavigator
} from 'react-navigation-redux-helpers';

import { AppNavigator } from './AppNavigator';

import mainReducer from './reducers';

const navReducer = createNavigationReducer(AppNavigator);

const appReducer = combineReducers({
    nav: navReducer,
    ...mainReducer
});

const navMiddleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);

export const AppReduxifyNavigator = reduxifyNavigator(AppNavigator, "root");

const configureStore = () => createStore(
    appReducer,
    applyMiddleware(thunkMiddleware, navMiddleware)
);

export default configureStore;
