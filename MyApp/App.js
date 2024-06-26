import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.fontSize}>My name is <Text style={styles.boldText}>Elsie Loise Amegavi</Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D08CF7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boldText: {
    fontWeight:'bold',
  },
  fontSize:{
    fontSize: '24px',
  },
});
