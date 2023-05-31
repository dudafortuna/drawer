import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Tela principal</Text>
      <Link href={"/telaA"}>Ir para tela A</Link>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
  }
});
