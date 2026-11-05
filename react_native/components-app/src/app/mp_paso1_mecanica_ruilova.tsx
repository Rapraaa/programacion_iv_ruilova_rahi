import { StyleSheet, Text, View } from 'react-native'

interface TarjetaVehiculoProps {
  modelo: string
  placa: string
  mecanico: string
  kilometraje?: number
}

function TarjetaVehiculo({ modelo, placa, mecanico, kilometraje }: TarjetaVehiculoProps) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.nombreVehiculo}>{modelo}</Text>
      <Text style={styles.datoPlaca}>{placa} · {kilometraje} km</Text>
      <Text style={styles.datoMecanico}>{mecanico}</Text>
    </View>
  )
}

export function MpPaso1() {
  return (
    <View style={styles.fondo}>
      <Text style={styles.encabezado}>Vehiculos en el taller</Text>
      <TarjetaVehiculo
        modelo="Toyota Hilux"
        placa="PBA-1234"
        mecanico="Rahi Ruilova"
        kilometraje={150000}
      />
      <TarjetaVehiculo
        modelo="Chevrolet Sail"
        placa="GYE-5678"
        mecanico="Carlos Perez"
        kilometraje={45000}
      />
      <TarjetaVehiculo
        modelo="Kia Sportage"
        placa="UIO-9012"
        mecanico="Pedro Gomez"
        kilometraje={80000}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
    paddingTop: 60,
    gap: 12,
  },
  encabezado: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a237e',
    marginBottom: 4,
  },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    gap: 4,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  nombreVehiculo: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  datoPlaca: {
    fontSize: 13,
    color: '#1565c0',
    fontFamily: 'monospace',
  },
  datoMecanico: {
    fontSize: 12,
    color: '#757575',
  },
})
