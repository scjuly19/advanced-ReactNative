import React, { Component } from "react";
import {
  Animated,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
console.disableYellowBox = true;

class Flip extends Component {
  constructor(props) {
    super(props);
    this.flipVal = new Animated.Value(0);
    this.value = 0;
    this.flipVal.addListener(({ value }) => {
      this.value = value;
    });
    this.frontAnimation = this.flipVal.interpolate({
      inputRange: [0, 180],
      outputRange: ["0deg", "180deg"],
    });
    this.backAnimation = this.flipVal.interpolate({
      inputRange: [0, 180],
      outputRange: ["180deg", "360deg"],
    });
  }

  flipMe = () => {
    if (this.value >= 90) {
      Animated.spring(this.flipVal, {
        toValue: 0,
        tension: 10,
        friction: 8,
      }).start();
    } else {
      Animated.spring(this.flipVal, {
        toValue: 180,
        tension: 10,
        friction: 8,
      }).start();
    }
  };
  render() {
    var flipFrontStyle = {
      transform: [{ rotateY: this.frontAnimation }],
    };
    var flipBackStyle = {
      transform: [{ rotateY: this.backAnimation }],
    };
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.flipMe}>
          <View>
            <Animated.View style={[styles.flipCard, flipFrontStyle]}>
              <Text>I am front face</Text>
            </Animated.View>
            <Animated.View
              style={[styles.flipCard, flipBackStyle, styles.flipCardBack]}
            >
              <Text>I am back face</Text>
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default Flip;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  flipCard: {
    backfaceVisibility: "hidden",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "coral",
    height: 400,
    width: 300,
    position: "relative",
    borderRadius: 10,
  },
  flipCardBack: {
    position: "absolute",
    top: 0,
    backgroundColor: "khaki",
  },
});
