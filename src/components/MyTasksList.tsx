import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';

interface FlatListHeaderComponentProps {
  darkMode: boolean;
}

function FlatListHeaderComponent({ darkMode }: FlatListHeaderComponentProps) {
  return (
    <View>
      <Text style={styles(darkMode).header}>Minhas tasks</Text>
    </View>
  );
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  darkMode: boolean;
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}

export function MyTasksList({ tasks, darkMode, onLongPress, onPress }: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
            style={item.done ? styles(darkMode).taskButtonDone : styles(darkMode).taskButton}
          >
            <View
              testID={`marker-${index}`}
              style={item.done ? styles(darkMode).taskMarkerDone : styles(darkMode).taskMarker}
            />
            <Text style={item.done ? styles(darkMode).taskTextDone : styles(darkMode).taskText}>{item.title}</Text>
          </TouchableOpacity>
        );
      }}
      ListHeaderComponent={<FlatListHeaderComponent darkMode={darkMode} />}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        paddingHorizontal: 24,
        marginTop: 32,
        backgroundColor: darkMode ? '#191D3A' : '#fff'
      }}
    />
  );
}

const styles = (darkMode: boolean) =>
  StyleSheet.create({
    header: {
      color: darkMode ? '#E1E1E6' : '#3D3D4D',
      fontSize: 24,
      fontFamily: 'Poppins-SemiBold'
    },
    taskButton: {
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 12,
      marginBottom: 4,
      borderRadius: 4,
      flexDirection: 'row',
      alignItems: 'center'
    },
    taskMarker: {
      height: 16,
      width: 16,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: darkMode ? '#9347CA' : '#3D3D4D',
      marginRight: 10
    },
    taskText: {
      color: darkMode ? '#E1E1E6' : '#3D3D4D'
    },
    taskButtonDone: {
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 12,
      marginBottom: 4,
      borderRadius: 4,
      backgroundColor: darkMode ? '#413A6F' : 'rgba(25, 61, 223, 0.1)',
      flexDirection: 'row',
      alignItems: 'center'
    },
    taskMarkerDone: {
      height: 16,
      width: 16,
      borderRadius: 8,
      backgroundColor: darkMode ? '#9347CA' : '#273FAD',
      marginRight: 10
    },
    taskTextDone: {
      color: darkMode ? '#E1E1E6' : '#A09CB1',
      textDecorationLine: 'line-through'
    }
  });
