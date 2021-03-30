import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <Text style={styles.blue}>Hello World!</Text>
      <View style={styles.container}>
        <Text style={styles.green}>This is a demo!</Text>
        <Image source={{ uri: 'https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' }} style={{ width: 250, height: 250 }} />
        
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cef5f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blue: {
    color: 'blue',
    fontSize: 20
  },
  green: {
    color: 'green',
    fontSize: 25
  }
});
