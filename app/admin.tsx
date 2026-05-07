import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function AdminDashboard() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.logo}>CabGo Admin</Text>
      <Text style={styles.title}>Fleet Control Dashboard</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Active Trips</Text>
        <Text style={styles.value}>24</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Online Drivers</Text>
        <Text style={styles.value}>58</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Today Revenue</Text>
        <Text style={styles.value}>NGN 425,000</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Pending Requests</Text>
        <Text style={styles.value}>7</Text>
      </View>

      <View style={styles.mapBox}>
        <Text style={styles.mapTitle}>Live Fleet Map</Text>
        <Text style={styles.mapText}>● Driver 1 — Ikeja</Text>
        <Text style={styles.mapText}>● Driver 2 — Lekki Phase 1</Text>
        <Text style={styles.mapText}>● Driver 3 — Victoria Island</Text>
        <Text style={styles.mapText}>● Driver 4 — Yaba</Text>
      </View>

      <View style={styles.activityBox}>
        <Text style={styles.sectionTitle}>Recent Trip Activity</Text>
        <Text style={styles.activity}>Ikeja City Mall → Lekki Phase 1 — NGN 5,500</Text>
        <Text style={styles.activity}>Yaba → Victoria Island — NGN 4,200</Text>
        <Text style={styles.activity}>Ajah → Ikoyi — NGN 8,000</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => router.replace('/')}>
        <Text style={styles.buttonText}>Back to App Demo</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1220',
  },
  content: {
    padding: 24,
    paddingBottom: 60,
  },
  logo: {
    color: '#F5C451',
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'center',
    marginTop: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#111827',
    padding: 18,
    borderRadius: 16,
    marginBottom: 12,
  },
  label: {
    color: '#C9D1D9',
    fontSize: 14,
  },
  value: {
    color: '#F5C451',
    fontSize: 26,
    fontWeight: '900',
    marginTop: 4,
  },
  mapBox: {
    backgroundColor: '#172033',
    padding: 18,
    borderRadius: 18,
    marginTop: 10,
    marginBottom: 18,
  },
  mapTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 12,
  },
  mapText: {
    color: '#C9D1D9',
    fontSize: 15,
    marginBottom: 6,
  },
  activityBox: {
    backgroundColor: '#111827',
    padding: 18,
    borderRadius: 18,
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 10,
  },
  activity: {
    color: '#C9D1D9',
    fontSize: 14,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#F5C451',
    paddingVertical: 14,
    borderRadius: 14,
  },
  buttonText: {
    color: '#111827',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '900',
  },
});