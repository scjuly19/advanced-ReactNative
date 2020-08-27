import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  PanResponder,
  UIManager,
  Animated,
  Dimensions,
} from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;
class Deck extends Component {
  constructor(props) {
    super(props);
    this.position = new Animated.ValueXY();
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        this.position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: () => {
        Animated.spring(this.position, { toValue: { x: 0, y: 0 } }).start();
      },
    });
  }

  getCardStyle() {
    const rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ["-120deg", "0deg", "120deg"],
    });

    return {
      ...this.position.getLayout(),
      transform: [{ rotate }],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            this.getCardStyle(),
            { height: 300, width: 200, backgroundColor: "purple" },
          ]}
          {...this.panResponder.panHandlers}
        >
          <Text>Deck</Text>
        </Animated.View>
      </View>
    );
  }
}

export default Deck;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
