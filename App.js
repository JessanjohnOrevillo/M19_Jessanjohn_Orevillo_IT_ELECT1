import React, { useState } from "react";
import { SafeAreaView, View, Button, StyleSheet } from "react-native";
import ColorChangerApp from "./ColorChangerApp";
import CounterApp from "./CounterApp";

export default function App() {
  const [selectedApp, setSelectedApp] = useState(null); // null = main menu

  const goBack = () => setSelectedApp(null);

  return (
    <SafeAreaView style={styles.container}>
      {!selectedApp ? (
        // Main Menu Buttons
        <View style={styles.buttonGroup}>
          <View style={styles.buttonContainer}>
            <Button title="Color Changer" onPress={() => setSelectedApp("color")} />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Counter" onPress={() => setSelectedApp("counter")} />
          </View>
        </View>
      ) : selectedApp === "color" ? (
        <ColorChangerApp goBack={goBack} />
      ) : (
        <CounterApp goBack={goBack} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  buttonGroup: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: { marginVertical: 10, width: 200 },
});
