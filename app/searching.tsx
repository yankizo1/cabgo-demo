import { router } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export default function SearchingScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/assigned');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#F5C451" />
      <Text style={styles.title}>Finding nearby driver...</Text>
      <Text style={styles.subtitle}>
        Matching passenger with the closest available cab
      </Text>
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
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '800',
    marginTop: 20,
    textAlign: 'center',
  },
  subtitle: {
    color: '#C9D1D9',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 8,
  },
});