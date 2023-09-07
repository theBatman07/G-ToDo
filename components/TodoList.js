import React, { useState } from "react";
import { View, Text, TextInput, Button, ScrollView } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        To-Do List
      </Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          style={{
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "flex-start",
            height: 40,
            borderWidth: 1,
            paddingHorizontal: 10,
            marginRight: 10,
            minWidth: 180,
            borderRadius: 20,
          }}
          value={newTask}
          onChangeText={(text) => setNewTask(text)}
          placeholder="Add a new task"
        />
        {/* <Button title="Add" onPress={addTask} /> */}
        <Ionicons
          name="add-circle-outline"
          size={38}
          color="black"
          onPress={addTask}
        />
      </View>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 10,
          paddingTop: 10,
        }}
      >
        Tasks
      </Text>
      <ScrollView>
        {tasks.map((task, index) => (
          <View
            key={index}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 5,
              padding: 10,
              borderWidth: 1,
              borderColor: "gray",
              borderRadius: 25,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
                fontStyle: "italic",
              }}
            >
              {task}
            </Text>
            {/* <Button title="Remove" onPress={() => removeTask(index)} /> */}
            <AntDesign
              name="checkcircleo"
              size={30}
              color="black"
              onPress={() => removeTask(index)}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default TodoList;
