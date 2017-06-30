import Expo from 'expo';
import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './store';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';

class App extends React.Component {
  render() {
    const ReviewNavigator = StackNavigator({
      Review: {
        screen: ReviewScreen,
      },
      Settings: {
        screen: SettingsScreen,
        path: 'ReviewNavigator/Settings'
      }
    });

    const MainNavigator = TabNavigator({
      Map: { screen: MapScreen },
      Deck: { screen: DeckScreen },
      ReviewJobs: { screen: ReviewNavigator }
    });

    const AppNavigator = TabNavigator({
      Welcome: { screen: WelcomeScreen },
      Auth: { screen: AuthScreen },
      Main: { screen: MainNavigator }
      }, {
        lazy: true,
        navigationOptions: {
          tabBarVisible: false
        }
      }
    );

    MainNavigator.navigationOptions = {
      tabBarLabel: 'Main'
    };

    ReviewNavigator.navigationOptions = {
      tabBarLabel: 'Review Jobs'
    };

    return (
        <Provider store={store}>
          <AppNavigator />
        </Provider>
    );
  }
}

Expo.registerRootComponent(App);
