import { StyleSheet, Text, View } from 'react-native'

export function MpPaso1() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Taller Mecanico Ruilova</Text>
      <Text style={styles.subtitulo}>Bahia 01 · Rahi Ruilova</Text>
      <Text style={styles.detalle}>Toyota Hilux · Placa PBA-1234</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc2db',
    gap: 8,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  subtitulo: {
    fontSize: 16,
    color: '#333',
  },
  detalle: {
    fontSize: 13,
    color: '#777',
  },
})
