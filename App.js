import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import PainReportGenerator from './src/components/PainReportGenerator';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Welcome to My App!</Text>
        <Text style={styles.subtitle}>This is the main screen of the app.</Text>
        <PainReportGenerator />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});

export default App;
