import React, { useState } from 'react';
import { Image, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import checkIcon from '../assets/icons/Check.png';

interface TodoInputProps {
  addTask: (task: string) => void;
  darkMode: boolean;
}

export function TodoInput({ addTask, darkMode }: TodoInputProps) {
  const [task, setTask] = useState('');

  function handleAddNewTask() {
    addTask(task);
    setTask('');
  }

  return (
    <View
      style={[
        styles(darkMode).inputContainer,
        Platform.OS === 'ios' ? styles(darkMode).inputIOSShadow : styles(darkMode).inputAndroidShadow
      ]}
    >
      <TextInput
        value={task}
        style={styles(darkMode).input}
        placeholder='Adicionar novo todo...'
        placeholderTextColor={darkMode ? '#E1E1E6' : '#000'}
        returnKeyType='send'
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
      />
      <TouchableOpacity
        testID='add-new-task-button'
        activeOpacity={0.7}
        style={styles(darkMode).addButton}
        onPress={handleAddNewTask}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = (darkMode: boolean) =>
  StyleSheet.create({
    inputContainer: {
      backgroundColor: darkMode ? '#413A6F' : '#F5F4F8',
      borderRadius: 5,
      marginTop: -25,
      marginHorizontal: 40,
      height: 50,
      flexDirection: 'row',
      alignItems: 'center'
    },
    input: {
      flex: 1,
      backgroundColor: darkMode ? '#413A6F' : '#F5F4F8',
      color: darkMode ? '#E1E1E6' : '#000',
      paddingLeft: 12,
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5
    },
    inputIOSShadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84
    },
    inputAndroidShadow: {
      elevation: 5
    },
    addButton: {
      backgroundColor: darkMode ? '#9347CA' : '#3FAD27',
      height: 50,
      paddingHorizontal: 16,
      justifyContent: 'center',
      alignItems: 'center',
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5
    }
  });
