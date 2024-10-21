import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Icon from './components';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Preview</Text>
      <Icon name="4k-fill" size={100} />
      <Icon name="bookmark-fill" size={100} />
      <Icon name="home-2-fill" size={100} />
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
