import React, { Component } from 'react';
import {
  View,
  PanResponder,
  Dimensions
} from 'react-native';

const { width, height } = Dimensions.get("window");

const getDirection = ({ moveX, moveY, dx, dy }) => {
  const draggedDown = dy > 30;
  const draggedUp = dy < -30;
  const draggedLeft = dx < -30;
  const draggedRight = dx > 30;

  let dragDirection = "";

  if (draggedDown || draggedUp) {
    if (draggedDown) dragDirection += "down";
    if (draggedUp) dragDirection += "up";
  }

  if (draggedLeft || draggedRight) {
    if (draggedLeft) dragDirection += "left";
    if (draggedRight) dragDirection += "ight";
  }
  
  if (dragDirection) return dragDirection;
};

export default class SwipeGesture extends Component {

  componentWillMount = () => {
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => !!getDirection(gestureState),
      onPanResponderRelease: (evt, gestureState) => {
        this.props.onSwipe(getDirection(gestureState));
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
    });
  }

  render() {
    return (
      <View {...this._panResponder.panHandlers} style={this.props.gestureStyle}>
        <View>{this.props.children}</View>
      </View>
    )
  }
}
