import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Animated } from 'react-native';

export default function ScanScreen() {
  const [isScanning, setIsScanning] = useState(false);
  const [progress, setProgress] = useState(new Animated.Value(0));
  const [isComplete, setIsComplete] = useState(false);

  const startScan = () => {
    setIsComplete(false);
    setIsScanning(true);
    setProgress(new Animated.Value(0));

    Animated.timing(progress, {
      toValue: 1,
      duration: 3000, // 3 seconds
      useNativeDriver: false,
    }).start(() => {
      setIsScanning(false);
      setIsComplete(true);
    });
  };

  const progressWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={[styles.scanButton, isScanning && styles.scanButtonDisabled]}
        onPress={startScan}
        disabled={isScanning}
      >
        <Text style={styles.scanText}>{isScanning ? 'Scanning...' : 'Start Scan'}</Text>
      </TouchableOpacity>

      {isScanning && (
        <View style={styles.progressContainer}>
          <Animated.View style={[styles.progressBar, { width: progressWidth }]} />
        </View>
      )}

      {isComplete && (
        <Text style={styles.completeText}>✓ Scan Complete</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  scanButton: {
    backgroundColor: 'red', 
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 30,
  },
  scanButtonDisabled: {
    backgroundColor: 'red',
  },
  scanText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  progressContainer: {
    width: '100%',
    height: 12,
    backgroundColor: 'orange',
    borderRadius: 10,
    overflow: 'hidden',
  },

  completeText: {
    marginTop: 20,
    fontSize: 18,
    color: '#4caf50', // green for success
    fontWeight: 'bold',
  },
});
