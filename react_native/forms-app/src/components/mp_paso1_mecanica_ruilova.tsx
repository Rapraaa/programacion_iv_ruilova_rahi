import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'

export type Vehiculo = {
  id: string
  modelo: string
  placa: string
  listo: boolean
}

export const VEHICULOS: Vehiculo[] = [
  { id: '1', modelo: 'Toyota Hilux',    placa: 'PBA-1234', listo: true  },
  { id: '2', modelo: 'Chevrolet Sail',  placa: 'GYE-5678', listo: true  },
  { id: '3', modelo: 'Kia Sportage',    placa: 'UIO-9012', listo: false },
  { id: '4', modelo: 'Ford F-150',      placa: 'CUE-7890', listo: true  },
  { id: '5', modelo: 'Hyundai Tucson',  placa: 'LOJ-3456', listo: false },
  { id: '6', modelo: 'Mazda BT-50',     placa: 'PBC-2468', listo: true  },
  { id: '7', modelo: 'Suzuki Vitara',   placa: 'GYA-1357', listo: true  },
  { id: '8', modelo: 'Nissan Frontier', placa: 'UIA-8642', listo: false },
]

export function MpFilaVehiculo({ vehiculo }: { vehiculo: Vehiculo }) {
  return (
    <View style={styles1.fila}>
      <View style={styles1.info}>
        <Text style={styles1.modelo}>{vehiculo.modelo}</Text>
        <Text style={styles1.placa}>{vehiculo.placa}</Text>
      </View>
      <View
        style={[
          styles1.estado,
          vehiculo.listo ? styles1.estadoListo : styles1.estadoPendiente,
        ]}
      >
        <Text style={styles1.textoEstado}>
          {vehiculo.listo ? 'LISTO' : 'EN TALLER'}
        </Text>
      </View>
    </View>
  )
}

export default function MpPaso1() {
  return (
    <SafeAreaView style={styles1.contenedor}>
      <Text style={styles1.titulo}>Vehiculos - Rahi Ruilova</Text>
      <FlatList<Vehiculo>
        data={VEHICULOS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MpFilaVehiculo vehiculo={item} />}
      />
    </SafeAreaView>
  )
}

const styles1 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#1565c0',
    color: '#fff',
  },
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 12,
    marginTop: 8,
    borderRadius: 8,
    padding: 12,
  },
  info: { flex: 1 },
  modelo: { fontSize: 15, fontWeight: '600', color: '#1a1a1a' },
  placa: { fontSize: 12, color: '#666', marginTop: 2 },
  estado: {
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  estadoListo: { backgroundColor: '#e8f5e9' },
  estadoPendiente: { backgroundColor: '#ffebee' },
  textoEstado: { fontSize: 11, fontWeight: '700' },
})
