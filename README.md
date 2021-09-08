# ReactNative-SwipeGestureHandler
Swipe gesture handler for my projects. Feel free to use.


Usage:

'''
import React from 'react';
import { View } from 'react-native';

import SwipeGesture from '/locationOfTheFile'

function Test() {
  return (
    <SwipeGesture onSwipe={ (direction) => { console.log(direction) }}>
      <View>
          .....    
      </View>
    </SwipeGesture>
  );
}


export default Test;
'''
