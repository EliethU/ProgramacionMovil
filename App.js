import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Galería de Gatitos</Text>
      <Image source={require('./Imagenes/imagenes.jpg')} />
      <StatusBar style="auto" />
      <Image style={styles.gato} source={require('./Imagenes/imagenes.jpg')} />
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
  gato: {
    width: 300,
    height: 300,
    fontSize: 20,
    fontWeight: 'bold'
  }

});
