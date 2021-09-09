# ReactNative-PanResponder example
Swipe gesture handler for my projects(left,right,up and down). It is not perfect, needs some correction. Feel free to use/edit/use it.


Usage:

```
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
```
