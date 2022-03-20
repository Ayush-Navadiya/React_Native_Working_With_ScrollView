import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Upper View */}
      <View style={styles.container1}>
        <Text>Stuff in view 1!</Text>
      </View>
      {/* Lower View */}
      <View style={styles.container2}>
        <Text style={{color: '#fff'}}>Stuff in view 2!</Text>
      </View>
      <View style={styles.container1}>
        <Text>Stuff in view 3!</Text>
      </View>
      <View style={styles.container2}>
        <Text style={{color: '#fff'}}>Stuff in view 4!</Text>
      </View>
    </ScrollView>
  );
}

// container Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    },
  container1: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    height: 300,
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    width: '100%',
    height: 300,
    justifyContent: 'center',
  },
});

