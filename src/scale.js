import React, { Component } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

const styles = StyleSheet.create({
  container: {
    margin: 30,
    height: 100,
    width: 100,
    backgroundColor:'khaki'
  },
});

class Scale extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startValue: new Animated.Value(0),
      endVal: 2,
    };
  }
  componentDidMount() {
    Animated.timing(this.state.startValue, {
      toValue: this.state.endVal,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }
  render() {
    const scalestyle = {
      transform: [{ scale: this.state.startValue }],
    };
    return (
      <Animated.View
        style={[
          styles.container,
          scalestyle
        ]}
      >
        <Text>Scale</Text>
      </Animated.View>
    );
  }
}

export default Scale;
