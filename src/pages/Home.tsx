import React, { useState } from 'react';

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

  function handleAddTask(newTaskTitle: string) {
    if (!newTaskTitle) return;

    const newTask: Task = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    };

    setTasks((previousTasks) => [...previousTasks, newTask]);
  }

  function handleMarkTaskAsDone(id: number) {
    setTasks((previousTasks) => previousTasks.map((task) => (task.id === id ? { ...task, done: true } : task)));
  }

  function handleRemoveTask(id: number) {
    setTasks((previousTasks) => previousTasks.filter((task) => task.id !== id));
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList tasks={tasks} onPress={handleMarkTaskAsDone} onLongPress={handleRemoveTask} />
    </>
  );
}
