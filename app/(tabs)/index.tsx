import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>CabGo</Text>
      <Text style={styles.title}>Premium E-Hailing Demo</Text>
      <Text style={styles.subtitle}>
        Book rides, track drivers, and present a real transport platform.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/ride')}
      >
        <Text style={styles.buttonText}>Book a Ride</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.adminButton}
        onPress={() => router.push('/admin')}
      >
        <Text style={styles.adminButtonText}>Open Admin Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1220',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  logo: {
    fontSize: 34,
    fontWeight: '800',
    color: '#F5C451',
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    color: '#C9D1D9',
    textAlign: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#F5C451',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 14,
  },
  buttonText: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '800',
  },
  adminButton: {
    marginTop: 14,
    borderWidth: 1,
    borderColor: '#F5C451',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 14,
  },
  adminButtonText: {
    color: '#F5C451',
    fontSize: 15,
    fontWeight: '800',
  },
});