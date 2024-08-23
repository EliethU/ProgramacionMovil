import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.tituloPrincipal}>Galería de fotos de Gatitos :3</Text>
      
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.imageContainer}>

          <View style={styles.imageWrapper}>
            <Image style={styles.imagen} source={require('./Imagenes/1.jpg')} />
            <Text style={styles.tituloImagen}>Gatito adorable</Text>
          </View>
          <View style={styles.imageWrapper}>
            <Image style={styles.imagen} source={require('./Imagenes/2.jpg')} />
            <Text style={styles.tituloImagen}>Gatitos abrazaditos</Text>
          </View>
          <View style={styles.imageWrapper}>
            <Image style={styles.imagen} source={require('./Imagenes/3.jpg')} />
            <Text style={styles.tituloImagen}>Gatito fachero</Text>
          </View>
          <View style={styles.imageWrapper}>
            <Image style={styles.imagen} source={require('./Imagenes/4.jpg')} />
            <Text style={styles.tituloImagen}>Gatito fachero en la playa</Text>
          </View>
          <View style={styles.imageWrapper}>
            <Image style={styles.imagen} source={require('./Imagenes/5.jpg')} />
            <Text style={styles.tituloImagen}>Gatito chiquito</Text>
          </View>
          <View style={styles.imageWrapper}>
            <Image style={styles.imagen} source={require('./Imagenes/6.jpg')} />
            <Text style={styles.tituloImagen}>Gatito serio</Text>
          </View>
          <View style={styles.imageWrapper}>
            <Image style={styles.imagen} source={require('./Imagenes/7.jpg')} />
            <Text style={styles.tituloImagen}>Gatito Wilson</Text>
          </View>
          <View style={styles.imageWrapper}>
            <Image style={styles.imagen} source={require('./Imagenes/8.jpg')} />
            <Text style={styles.tituloImagen}>Gatito halloween</Text>
          </View>
          <View style={styles.imageWrapper}>
            <Image style={styles.imagen} source={require('./Imagenes/9.jpg')} />
            <Text style={styles.tituloImagen}>Gatito enojado</Text>
          </View>
          <View style={styles.imageWrapper}>
            <Image style={styles.imagen} source={require('./Imagenes/10.jpg')} />
            <Text style={styles.tituloImagen}>Gatito con corbatin</Text>
          </View>
        </View>
      </ScrollView>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginVertical: 20,
  },
  tituloPrincipal: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  scrollView: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  imageWrapper: {
    margin: 5,
    alignItems: 'center',
  },
  imagen: {
    borderRadius: 5,
    width: 150,
    height: 150,
  },
  tituloImagen: {
    marginTop: 5,
    fontSize: 16,
    color: 'black',
  },
});