import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button } from 'react-native-elements';


class ReviewScreen extends Component {
  static navigationOptions = {
    title: 'Review Jobs',
    style: {
      marginTop: Platform.OS === 'android' ? 24 : 0
    },
    headerRight: (
      <Button
        title='Settings'
        onPress={() => {}}
        backgroundColor='rgba(0, 0, 0, 0)'
        color='rgba(0, 122, 255, 1)'
      />
    )
  };

//this.props.navigation.navigate('ReviewNavigator/Settings')

  render() {
    return (
      <View>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
      </View>
    );
  }
}

export default ReviewScreen;
