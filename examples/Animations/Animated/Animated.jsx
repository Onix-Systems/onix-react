import React, { useRef } from 'react';
import { Animated, Text, View, StyleSheet, Button, SafeAreaView } from 'react-native';

const App = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const animateOpacity = (toValue, duration) => {
    Animated.timing(fadeAnim, {
      toValue,
      duration,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.fadingContainer, { opacity: fadeAnim }]}>
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title="Fade In View" onPress={() => animateOpacity(1, 5000)} />
        <Button title="Fade Out View" onPress={() => animateOpacity(0, 3000)} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fadingContainer: {
    backgroundColor: 'lightgray',
    padding: 20,
    borderRadius: 10,
  },
  fadingText: {
    fontSize: 18,
    textAlign: 'center',
  },
  buttonRow: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default App;
