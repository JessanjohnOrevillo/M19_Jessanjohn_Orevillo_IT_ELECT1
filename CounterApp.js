import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

export default function CounterApp({ goBack }) {
  const [count, setCount] = useState(0);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Counter App</Text>
      <Text style={styles.count}>{count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={() => setCount(count + 1)} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Decrement" onPress={() => setCount(count - 1)} />
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
    backgroundColor: '#f0f0f0',
    paddingVertical: 20,
  },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  count: { fontSize: 40, marginBottom: 30 },
  buttonContainer: { marginVertical: 10, width: 150 },
});

