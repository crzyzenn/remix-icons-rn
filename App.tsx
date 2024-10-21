import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RemixIcon from './components';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Preview</Text>
      <RemixIcon name="ri-4k-fill" size={100} />
      <RemixIcon name="ri-bookmark-fill" size={100} />
      <RemixIcon name="ri-home-fill" size={100} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
