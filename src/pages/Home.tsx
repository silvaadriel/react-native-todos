import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  function handleAddTask(newTaskTitle: string) {
    if (!newTaskTitle) return;

    const newTask: Task = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    };

    setTasks((previousTasks) => [...previousTasks, newTask]);
  }

  function handleToggleDarkMode() {
    setDarkMode((previousState) => !previousState);
  }

  function handleMarkTaskAsDone(id: number) {
    setTasks((previousTasks) => previousTasks.map((task) => (task.id === id ? { ...task, done: true } : task)));
  }

  function handleRemoveTask(id: number) {
    setTasks((previousTasks) => previousTasks.filter((task) => task.id !== id));
  }

  return (
    <View style={styles(darkMode).container}>
      <Header darkMode={darkMode} toggleDarkMode={handleToggleDarkMode} />

      <TodoInput addTask={handleAddTask} darkMode={darkMode} />

      <MyTasksList tasks={tasks} darkMode={darkMode} onPress={handleMarkTaskAsDone} onLongPress={handleRemoveTask} />
    </View>
  );
}

const styles = (darkMode: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: darkMode ? '#191D3A' : '#fff'
    }
  });
