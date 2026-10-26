import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

const servicios = [
  { nombre: 'Cambio de aceite', precio: 25 },
  { nombre: 'Alineacion', precio: 20 },
  { nombre: 'Balanceo', precio: 15 },
  { nombre: 'Cambio de frenos', precio: 60 },
  { nombre: 'Diagnostico', precio: 15 },
  { nombre: 'Cambio de bujias', precio: 30 },
  { nombre: 'Cambio de bateria', precio: 90 },
  { nombre: 'Limpieza de inyectores', precio: 45 },
  { nombre: 'Cambio de embrague', precio: 180 },
  { nombre: 'Pintura', precio: 300 },
]

export function MpPaso4() {
  return (
    <SafeAreaView style={estilos4.safeArea}>
      <View style={estilos4.cabecera}>
        <Text style={estilos4.titulo}>Servicios del taller</Text>
        <Text style={estilos4.subtitulo}>Mecanico: Rahi Ruilova</Text>
      </View>

      <ScrollView
        contentContainerStyle={estilos4.scrollContenido}
        showsVerticalScrollIndicator={false}
      >
        {servicios.map((servicio) => (
          <View key={servicio.nombre} style={estilos4.fila}>
            <Text style={estilos4.nombre}>{servicio.nombre}</Text>
            <Text style={estilos4.precio}>${servicio.precio}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const estilos4 = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  cabecera: {
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e7ef',
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a237e',
  },
  subtitulo: {
    fontSize: 12,
    color: '#78909c',
    fontFamily: 'monospace',
    marginTop: 2,
  },
  scrollContenido: {
    padding: 16,
    gap: 10,
    paddingBottom: 40,
  },
  fila: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
  },
  nombre: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  precio: {
    fontSize: 14,
    color: '#2e7d32',
    fontFamily: 'monospace',
  },
})
