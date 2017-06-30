import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import * as actions from '../actions';

class MapScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Map',
    title: 'Map'
  };

  state = {
    mapLoaded: false,
    region: {
      latitude: 43.15914864327973,
      longitude: -70.93401808705619,
      latitudeDelta: 0.02059289918139484,
      longitudeDelta: 0.01785231992825231
    }
  }

  componentDidMount() {
    this.setState({ mapLoaded: true });
  }

  onRegionChangeComplete = region => {
    this.setState({ region });
  }

  onButtonPressed = () => {
    this.props.fetchJobs(this.state.region, () => {
      this.props.navigation.navigate('Deck');
    });
  }


  render() {
    if (!this.state.mapLoaded) {
      return (
          <View style={styles.viewStyle}>
            <ActivityIndicator size="large" />
          </View>
        );
    }
    return (
      <View style={styles.viewStyle}>
        <MapView
          style={styles.mapStyle}
          region={this.state.region}
          onRegionChangeComplete={this.onRegionChangeComplete}
        />
        <View style={styles.buttonContainer}>
          <Button
            size='large'
            title='Search This Area'
            backgroundColor='#009688'
            icon={{ name: 'search' }}
            onPress={this.onButtonPressed}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  mapStyle: {
    flex: 1
  },
  viewStyle: {
    flex: 1,
    paddingTop: 25,
    justifyContent: 'center'
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0
  }
};

export default connect(null, actions)(MapScreen);
