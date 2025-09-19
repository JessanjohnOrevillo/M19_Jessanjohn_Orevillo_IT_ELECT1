import React, { useState } from 'react';
import { View, Button, StyleSheet, ScrollView } from 'react-native';

export default function ColorChangerApp({ goBack }) {
  const [bgColor, setBgColor] = useState('#add8e6'); // initial light blue

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: bgColor }]}>
      <View style={styles.buttonContainer}>
        <Button title="White" onPress={() => setBgColor('#ffffff')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Light Blue" onPress={() => setBgColor('#add8e6')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Light Green" onPress={() => setBgColor('#90ee90')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Back" onPress={goBack} color="red" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  buttonContainer: { marginVertical: 10, width: 150 },
});

