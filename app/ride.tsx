import { router } from 'expo-router';
import { useState } from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function RideScreen() {
  const isWeb = Platform.OS === 'web';

  const [selectedRide, setSelectedRide] = useState('Economy');
  const [fare, setFare] = useState('NGN 5,500');

  const selectRide = (type: string) => {
    setSelectedRide(type);

    if (type === 'Economy') setFare('NGN 5,500');
    if (type === 'Comfort') setFare('NGN 7,000');
    if (type === 'Executive') setFare('NGN 10,500');
  };

  const rides = [
    ['Economy', 'Affordable everyday ride', 'NGN 5,500'],
    ['Comfort', 'Extra comfort and space', 'NGN 7,000'],
    ['Executive', 'Premium business class ride', 'NGN 10,500'],
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
    >
      <View style={styles.fakeMap}>
        <Text style={styles.fakeMapTitle}>Live Route Preview</Text>

        <Text style={styles.fakeMapText}>
          Pickup: Ikeja City Mall
        </Text>

        <Text style={styles.fakeMapText}>
          Destination: Lekki Phase 1
        </Text>

        <Text style={styles.fakeMapHint}>
          {isWeb
            ? 'Web demo map preview'
            : 'Mobile map screen ready'}
        </Text>
      </View>

      <View style={styles.panel}>
        <Text style={styles.title}>Book a Ride</Text>

        <TextInput
          style={styles.input}
          placeholder="Pickup location"
          placeholderTextColor="#9CA3AF"
          defaultValue="Ikeja City Mall"
        />

        <TextInput
          style={styles.input}
          placeholder="Destination"
          placeholderTextColor="#9CA3AF"
          defaultValue="Lekki Phase 1"
        />

        <Text style={styles.sectionTitle}>
          Choose Ride Type
        </Text>

        <View style={styles.rideOptions}>
          {rides.map(([type, desc, price]) => {
            const active = selectedRide === type;

            return (
              <TouchableOpacity
                key={type}
                style={[
                  styles.rideCard,
                  active && styles.activeRideCard,
                ]}
                onPress={() => selectRide(type)}
              >
                <Text
                  style={
                    active
                      ? styles.rideTitleActive
                      : styles.rideTitle
                  }
                >
                  {type}
                </Text>

                <Text
                  style={
                    active
                      ? styles.rideMetaActive
                      : styles.rideMeta
                  }
                >
                  {desc}
                </Text>

                <Text
                  style={
                    active
                      ? styles.ridePriceActive
                      : styles.ridePrice
                  }
                >
                  {price}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.fareBox}>
          <Text style={styles.fareLabel}>
            Estimated Fare
          </Text>

          <Text style={styles.fareValue}>
            {fare}
          </Text>

          <View style={styles.tripMetaRow}>

            <View style={styles.tripMetaCard}>
              <Text style={styles.tripMetaLabel}>
                Distance
              </Text>

              <Text style={styles.tripMetaValue}>
                12.4 km
              </Text>
            </View>

            <View style={styles.tripMetaCard}>
              <Text style={styles.tripMetaLabel}>
                ETA
              </Text>

              <Text style={styles.tripMetaValue}>
                14 mins
              </Text>
            </View>

            <View style={styles.tripMetaCard}>
              <Text style={styles.tripMetaLabel}>
                Driver
              </Text>

              <Text style={styles.tripMetaValue}>
                Nearby
              </Text>
            </View>

          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/searching')}
        >
          <Text style={styles.buttonText}>
            Find Driver
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1220',
  },

  scrollContent: {
    paddingBottom: 30,
  },

  fakeMap: {
    minHeight: 180,
    backgroundColor: '#172033',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },

  fakeMapTitle: {
    color: '#F5C451',
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 12,
  },

  fakeMapText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 6,
    textAlign: 'center',
  },

  fakeMapHint: {
    color: '#C9D1D9',
    fontSize: 13,
    marginTop: 10,
    textAlign: 'center',
  },

  panel: {
    backgroundColor: '#111827',
    padding: 20,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 16,
    textAlign: 'center',
  },

  input: {
    backgroundColor: '#1F2937',
    color: '#FFFFFF',
    padding: 14,
    borderRadius: 12,
    marginBottom: 14,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
  },

  rideOptions: {
    marginBottom: 18,
  },

  rideCard: {
    backgroundColor: '#1F2937',
    padding: 14,
    borderRadius: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#2D3748',
  },

  activeRideCard: {
    borderColor: '#F5C451',
    backgroundColor: '#2A2212',
  },

  rideTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },

  rideMeta: {
    color: '#C9D1D9',
    fontSize: 13,
    marginTop: 2,
  },

  ridePrice: {
    color: '#F5C451',
    fontSize: 16,
    fontWeight: '800',
    marginTop: 6,
  },

  rideTitleActive: {
    color: '#F5C451',
    fontSize: 16,
    fontWeight: '800',
  },

  rideMetaActive: {
    color: '#F5E6B3',
    fontSize: 13,
    marginTop: 2,
  },

  ridePriceActive: {
    color: '#F5C451',
    fontSize: 16,
    fontWeight: '800',
    marginTop: 6,
  },

  fareBox: {
    backgroundColor: '#0B1220',
    padding: 16,
    borderRadius: 14,
    marginBottom: 18,
  },

  fareLabel: {
    color: '#9CA3AF',
    fontSize: 13,
  },

  fareValue: {
    color: '#F5C451',
    fontSize: 24,
    fontWeight: '800',
    marginTop: 4,
  },

  tripMetaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
  },

  tripMetaCard: {
    backgroundColor: '#111827',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 14,
    width: '31%',
    borderWidth: 1,
    borderColor: '#1F2937',
  },

  tripMetaLabel: {
    color: '#9CA3AF',
    fontSize: 12,
    marginBottom: 6,
  },

  tripMetaValue: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
  },

  button: {
    backgroundColor: '#F5C451',
    paddingVertical: 16,
    borderRadius: 14,
    marginBottom: 20,
  },

  buttonText: {
    textAlign: 'center',
    color: '#111827',
    fontSize: 16,
    fontWeight: '800',
  },
});