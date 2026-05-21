import { router } from 'expo-router';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.heroSection}>
        <Text style={styles.logo}>CabGo</Text>

        <Text style={styles.title}>
          Premium Smart Mobility Platform
        </Text>

        <Text style={styles.subtitle}>
          Real-time ride booking, fleet monitoring,
          driver tracking, and transport intelligence.
        </Text>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => router.push('/ride')}
        >
          <Text style={styles.primaryButtonText}>
            Book a Ride
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => router.push('/admin')}
        >
          <Text style={styles.secondaryButtonText}>
            Open Admin Dashboard
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.featuresSection}>
        <Text style={styles.sectionTitle}>
          Platform Features
        </Text>

        <View style={styles.cardsWrapper}>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              Live Driver Tracking
            </Text>

            <Text style={styles.cardText}>
              Monitor vehicles and drivers in real-time
              with fleet intelligence capabilities.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              Smart Fleet Dashboard
            </Text>

            <Text style={styles.cardText}>
              Monitor trips, revenue, active drivers,
              and operational analytics.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              Scalable Infrastructure
            </Text>

            <Text style={styles.cardText}>
              Built for transport companies,
              logistics firms, and mobility startups.
            </Text>
          </View>

        </View>
      </View>

      <Text style={styles.footer}>
        CabGo MVP Prototype • Smart Transport Technology
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#071120',
    padding: 24,
    justifyContent: 'space-between',
    maxWidth: 1200,
    width: '100%',
    alignSelf: 'center',
  },

  heroSection: {
    marginTop: 70,
    maxWidth: 700,
  },

  logo: {
    color: '#F5C451',
    fontSize: 42,
    fontWeight: '900',
    marginBottom: 16,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: '900',
    lineHeight: 42,
    marginBottom: 18,
  },

  subtitle: {
    color: '#C9D1D9',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 28,
  },

  primaryButton: {
    backgroundColor: '#F5C451',
    paddingVertical: 16,
    paddingHorizontal: 28,
    borderRadius: 16,
    marginBottom: 14,
    alignSelf: 'flex-start',
    minWidth: 220,
  },

  primaryButtonText: {
    color: '#111827',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '900',
  },

  secondaryButton: {
    borderWidth: 1,
    borderColor: '#F5C451',
    paddingVertical: 16,
    paddingHorizontal: 28,
    borderRadius: 16,
    alignSelf: 'flex-start',
    minWidth: 220,
  },

  secondaryButtonText: {
    color: '#F5C451',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '800',
  },

  featuresSection: {
    marginTop: 40,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 20,
  },

  cardsWrapper: {
    flexDirection: 'row',
    gap: 16,
    flexWrap: 'wrap',
  },

  card: {
    backgroundColor: '#111827',
    padding: 22,
    borderRadius: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#1F2937',
    width: 320,
  },

  cardTitle: {
    color: '#F5C451',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 10,
  },

  cardText: {
    color: '#C9D1D9',
    fontSize: 14,
    lineHeight: 22,
  },

  footer: {
    color: '#6B7280',
    textAlign: 'center',
    fontSize: 13,
    marginTop: 20,
    marginBottom: 12,
  },

});