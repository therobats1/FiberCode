
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Opening from './pages/Opening';  

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Opening /> {/* opining page*/}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});





