import { router } from 'expo-router';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>FORTUNE TELLER</Text>

      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOUPTWkOWi-vTnxPVCyX19Va-HRR9AFG9C0xp20kx1fW17COAJT-J_ngs&s=10',
        }}
        style={styles.image}
      />

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          Curious to know your fate? Are you someone who has an idea,
          and you wonder if it is good or not? We can help you find out!
        </Text>
      </View>

      <Button
        title="Reveal My Coding Destiny"
        color="#00C853"
        onPress={() => router.push('/reveal')}
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
    height: 200,
    borderRadius: 100,
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