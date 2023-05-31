import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Tela B</Text>
      <Link href={"/"}>Voltar para home</Link>

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
