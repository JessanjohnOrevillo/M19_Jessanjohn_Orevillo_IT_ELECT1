import React, { useState, useRef } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Button } from "react-native";

export default function ChatBox({ goBack }) {
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [isUser, setIsUser] = useState(true);
  const chatListRef = useRef(null);

  const sendChat = () => {
    if (chatInput.trim()) {
      setChatMessages(prev => [
        ...prev,
        { id: Date.now().toString(), text: chatInput, sender: isUser ? "me" : "other" },
      ]);
      setChatInput("");
      setIsUser(!isUser);
      setTimeout(() => chatListRef.current?.scrollToEnd({ animated: true }), 100);
    }
  };

  const renderChat = ({ item }) => (
    <View style={[styles.chatBubble, item.sender === "me" ? styles.myBubble : styles.theirBubble]}>
      <Text style={[styles.chatText, item.sender === "me" && { color: "#fff" }]}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Button title="Back" color="red" onPress={goBack} />
      <Text style={styles.title}>Chat</Text>
      <FlatList ref={chatListRef} data={chatMessages} renderItem={renderChat} keyExtractor={item => item.id} style={{ flexShrink: 1 }} />
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={chatInput}
          onChangeText={setChatInput}
        />
        <TouchableOpacity style={styles.button} onPress={sendChat}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#f2f2f2" },
  title: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
  chatBubble: { padding: 10, borderRadius: 12, marginVertical: 4, maxWidth: "70%" },
  myBubble: { backgroundColor: "#007bff", alignSelf: "flex-end" },
  theirBubble: { backgroundColor: "#e6e6e6", alignSelf: "flex-start" },
  chatText: { color: "#000" },
  inputRow: { flexDirection: "row", alignItems: "center", marginTop: 10 },
  input: { flex: 1, backgroundColor: "#fff", padding: 10, borderRadius: 8, borderWidth: 1, borderColor: "#ccc", marginRight: 5 },
  button: { backgroundColor: "#007bff", paddingHorizontal: 15, paddingVertical: 10, borderRadius: 8 },
  buttonText: { color: "#fff", fontWeight: "bold" },
});
