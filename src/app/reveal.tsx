import { router } from 'expo-router';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function RevealScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Here is your Fortune!</Text>

      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQarJlqCxZ8swcgkDNWHV82hEdGeyV-koDS6xdYgr7oRAi_RYuhU5kWKr8&s=10',
        }}
        style={styles.image}
      />

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          You will solve a bug today by randomly deleting a single line of code
          that you didn't even know was there.
        </Text>
      </View>

      <Button
        title="Go Back"
        color="#00C853"
        onPress={() => router.back()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#E0F7FA',
  },

  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },

  image: {
    width: 200,
    height: 150,
    borderRadius: 40,
    marginBottom: 20,
  },

  infoBox: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: '90%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },

  infoText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#707070',
    lineHeight: 24,
  },
});