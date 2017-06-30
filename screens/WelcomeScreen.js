import _ from 'lodash';
import { AppLoading } from 'expo';
import { AsyncStorage } from 'react-native';
import React, { Component } from 'react';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to Job App', color: '#03A9F4' },
  { text: 'Use this app to get a job', color: '#009688' },
  { text: 'Set your location, then swipe away', color: '#03A9F4' }
];

class WelcomeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Welcome',
    title: 'Welcome'
  };

  state = { token: null };

  async componentDidMount() {
    let token = await AsyncStorage.getItem('fb_token');

    if (token) {
      this.props.navigation.navigate('Map');
      this.setState({ token });
    } else {
      this.setState({ token: false });
    }
  }

  onWelcomeComplete = () => {
    this.props.navigation.navigate('Auth');
  }

  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading />;
    }
    return (
      <Slides
        data={SLIDE_DATA}
        onWelcomeComplete={this.onWelcomeComplete}
      />
    );
  }
}

export default WelcomeScreen;
