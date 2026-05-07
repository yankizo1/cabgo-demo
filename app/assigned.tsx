import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function AssignedScreen() {
  const [status, setStatus] = useState('Driver is on the way...');
  const [eta, setEta] = useState('4 mins');

  useEffect(() => {
    const t1 = setTimeout(() => {
      setStatus('Driver is almost there...');
      setEta('2 mins');
    }, 3000);

    const t2 = setTimeout(() => {
      setStatus('Driver has arrived');
      setEta('Arrived');
    }, 6000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Driver Assigned</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Driver</Text>
        <Text style={styles.value}>Daniel Okafor</Text>
        <Text style={styles.meta}>Toyota Camry • LND 234 XY</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Status</Text>
        <Text style={styles.value}>{status}</Text>
        <Text style={styles.meta}>ETA: {eta}</Text>
      </View>

      <TouchableOpacity onPress={() => router.replace('/')} style={styles.button}>
        <Text style={styles.buttonText}>Finish Demo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1220',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#111827',
    padding: 18,
    borderRadius: 16,
    marginBottom: 16,
  },
  label: {
    color: '#F5C451',
    fontSize: 14,
    fontWeight: '700',
  },
  value: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
    marginTop: 4,
  },
  meta: {
    color: '#C9D1D9',
    marginTop: 4,
  },
  button: {
    backgroundColor: '#F5C451',
    padding: 14,
    borderRadius: 12,
    marginTop: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '800',
    color: '#111827',
  },
});