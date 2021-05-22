import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native';

import moonIcon from '../assets/icons/Moon.png';
import sunIcon from '../assets/icons/Sun.png';

interface HeaderProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
}

export function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  return (
    <SafeAreaView style={styles(darkMode).container}>
      <View style={styles(darkMode).header}>
        <Text style={styles(darkMode).headerText}>to.</Text>
        <Text style={[styles(darkMode).headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
        <TouchableOpacity style={styles(darkMode).toggleDarkModeButton} onPress={toggleDarkMode}>
          {darkMode ? <Image source={sunIcon} /> : <Image source={moonIcon} />}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = (darkMode: boolean) =>
  StyleSheet.create({
    container: {
      backgroundColor: darkMode ? '#282B5A' : '#273FAD'
    },
    header: {
      paddingBottom: 44,
      backgroundColor: darkMode ? '#282B5A' : '#273FAD',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    },
    headerText: {
      fontSize: 24,
      color: darkMode ? '#E1E1E6' : '#FFF',
      fontFamily: 'Poppins-Regular'
    },
    toggleDarkModeButton: {
      position: 'absolute',
      right: 15,
      paddingVertical: 5
    }
  });
