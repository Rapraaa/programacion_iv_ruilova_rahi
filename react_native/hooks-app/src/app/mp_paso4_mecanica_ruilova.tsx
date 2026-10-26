import { useWindowDimensions, useColorScheme } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

export default function MpPaso4() {
  const { width, height, scale } = useWindowDimensions()
  const esquema = useColorScheme()

  const colores = {
    fondo:   esquema === 'dark' ? '#0d1b2a' : '#f5f5f5',
    tarjeta: esquema === 'dark' ? '#1a2a3a' : '#ffffff',
    texto:   esquema === 'dark' ? '#e8eaed' : '#1a1a1a',
    detalle: esquema === 'dark' ? '#9aa0a6' : '#666666',
    borde:   esquema === 'dark' ? '#2d3e50' : '#e0e0e0',
  }

  const columnas = width > 500 ? 2 : 1
  const anchoTarjeta = (width - 48 - (columnas - 1) * 12) / columnas

  const vehiculos = [
    { modelo: 'Toyota Hilux',   placa: 'PBA-1234', estado: 'listo' },
    { modelo: 'Chevrolet Sail', placa: 'GYE-5678', estado: 'listo' },
    { modelo: 'Kia Sportage',   placa: 'UIO-9012', estado: 'falla' },
    { modelo: 'Ford F-150',     placa: 'CUE-7890', estado: 'listo' },
  ]

  return (
    <View style={[styles.contenedor, { backgroundColor: colores.fondo }]}>
      <Text style={[styles.titulo, { color: colores.texto }]}>
        Vehiculos de Rahi Ruilova
      </Text>

      <View style={[styles.tarjeta, {
        backgroundColor: colores.tarjeta,
        borderColor: colores.borde,
        width: '100%',
      }]}>
        <Text style={[styles.detalle, { color: colores.detalle }]}>
          Pantalla: {Math.round(width)} × {Math.round(height)} dp
          {'  '}·{'  '}escala: {scale.toFixed(1)}
          {'  '}·{'  '}tema: {esquema ?? 'sin preferencia'}
        </Text>
      </View>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
        {vehiculos.map(vehiculo => (
          <View
            key={vehiculo.placa}
            style={[styles.tarjeta, {
              backgroundColor: colores.tarjeta,
              borderColor: colores.borde,
              width: anchoTarjeta,
            }]}
          >
            <Text style={[styles.nombreVehiculo, { color: colores.texto }]}>
              {vehiculo.modelo}
            </Text>
            <Text style={[styles.placaVehiculo, { color: colores.detalle }]}>
              {vehiculo.placa}
            </Text>
            <Text style={{
              fontSize: 12,
              fontWeight: '600',
              color: vehiculo.estado === 'listo' ? '#2e7d32' : '#c62828',
            }}>
              {vehiculo.estado.toUpperCase()}
            </Text>
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f5f5f5',
    gap: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  tarjeta: {
    width: '100%',
    padding: 16,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: '#fff',
    gap: 6,
  },
  detalle: {
    fontSize: 13,
    color: '#666',
  },
  nombreVehiculo: {
    fontSize: 15,
    fontWeight: '600',
  },
  placaVehiculo: {
    fontSize: 12,
    fontFamily: 'monospace',
  },
})
