import React, {useState} from 'react';
import {
  Pressable,
  LayoutAnimation,
  StyleSheet,
  View,
  Platform,
  UIManager
} from 'react-native';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const App = () => {
  const [boxPosition, setBoxPosition] = useState('left');

  const toggleBox = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setBoxPosition(boxPosition === 'left' ? 'right' : 'left');
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={toggleBox}
        style={[styles.box, boxPosition === 'right' && styles.moveRight]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'tomato',
  },
  moveRight: {
    alignSelf: 'flex-end',
    height: 200,
    width: 200,
  },
});
