import React, { useState, useRef } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Button } from "react-native";

export default function CommentSection({ goBack }) {
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const commentListRef = useRef(null);

  const addComment = () => {
    if (commentInput.trim()) {
      setComments(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          text: commentInput,
          user: "Jessan John",
          time: new Date().toLocaleTimeString(),
        },
      ]);
      setCommentInput("");
      setTimeout(() => commentListRef.current?.scrollToEnd({ animated: true }), 100);
    }
  };

  const renderComment = ({ item }) => (
    <View style={styles.commentItem}>
      <Text style={styles.commentUser}>{item.user}</Text>
      <Text style={styles.commentText}>{item.text}</Text>
      <Text style={styles.commentTime}>{item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Button title="Back" color="red" onPress={goBack} />
      <Text style={styles.title}>Comments</Text>
      <FlatList
        ref={commentListRef}
        data={comments}
        renderItem={renderComment}
        keyExtractor={item => item.id}
        style={{ flexShrink: 1 }}
      />
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Write a comment..."
          value={commentInput}
          onChangeText={setCommentInput}
        />
        <TouchableOpacity style={styles.button} onPress={addComment}>
          <Text style={styles.buttonText}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#f2f2f2" },
  title: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
  commentItem: { backgroundColor: "#eaeaea", padding: 8, borderRadius: 6, marginVertical: 4 },
  commentUser: { fontWeight: "bold", fontSize: 14 },
  commentText: { fontSize: 16 },
  commentTime: { fontSize: 12, color: "#555", textAlign: "right" },
  inputRow: { flexDirection: "row", alignItems: "center", marginTop: 10 },
  input: { flex: 1, backgroundColor: "#fff", padding: 10, borderRadius: 8, borderWidth: 1, borderColor: "#ccc", marginRight: 5 },
  button: { backgroundColor: "#007bff", paddingHorizontal: 15, paddingVertical: 10, borderRadius: 8 },
  buttonText: { color: "#fff", fontWeight: "bold" },
});
