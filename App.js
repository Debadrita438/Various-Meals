import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';

import MainNavigation from './navigation/MainNavigation';
// import MenuNavigation from './navigation/MainNavigation';
import SplashScreen from  "react-native-splash-screen";
import AuthReducer from './store/reducers/authReducers';
import CategoryReducer from './store/reducers/categoryReducer';
import mealReducer from './store/reducers/mealReducer';
import userReducer from './store/reducers/userReducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  categories: CategoryReducer,
  meals: mealReducer,
  users: userReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  })

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <MainNavigation />
        {/* <MenuNavigation /> */}
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
