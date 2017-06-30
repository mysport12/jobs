import React, { Component } from 'react';
import { ScrollView, View, Text, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  renderLastSlide = (index) => {
    if (index === this.props.data.length - 1) {
      return (
        <Button
          title="Let's Get Started"
          raised
          buttonStyle={styles.buttonStyle}
          onPress={this.props.onWelcomeComplete}
        />
      );
    }
  }
  renderSlides = () => {
    return this.props.data.map((slide, index) => {
      return (
        <View
          key={slide.text}
          style={
            [styles.slideStyle, { backgroundColor: slide.color }]
          }
        >
          <Text style={styles.slideText}>{slide.text}</Text>
          {this.renderLastSlide(index)}
        </View>
      );
    });
  }

  render() {
    return (
      <ScrollView
        horizontal
        pagingEnabled
        style={{ flex: 1 }}
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  slideText: {
    fontSize: 30,
    color: 'white',
    paddingBottom: 25,
    textAlign: 'center'
  },
  buttonStyle: {
    backgroundColor: 'black'
  }
};

export default Slides;
