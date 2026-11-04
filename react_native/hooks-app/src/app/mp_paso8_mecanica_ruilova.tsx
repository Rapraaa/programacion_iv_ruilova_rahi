import { StyleSheet, Text, View, Pressable } from 'react-native'
import { useDiagnosticoSimulado } from '@/hooks/useDiagnosticoSimulado'

export default function MpPaso8() {
  const hiluxHook  = useDiagnosticoSimulado('PBA-1234')
  const sailHook   = useDiagnosticoSimulado('GYE-5678')

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Diagnostico - Rahi Ruilova</Text>

      <TarjetaVehiculo placa="PBA-1234" hook={hiluxHook} />
      <TarjetaVehiculo placa="GYE-5678" hook={sailHook} />
    </View>
  )
}

interface PropsTarjeta {
  placa: string
  hook: ReturnType<typeof useDiagnosticoSimulado>
}

function TarjetaVehiculo({ placa, hook }: PropsTarjeta) {
  const { estado, revisiones, temperatura, revisar, reiniciar } = hook

  const colorEstado: Record<string, string> = {
    pendiente: '#757575',
    revisando: '#1565c0',
    ok:        '#2e7d32',
    falla:     '#c62828',
  }

  const textoBoton: Record<string, string> = {
    pendiente: 'Revisar',
    revisando: 'Revisando…',
    ok:        'Revisar otra vez',
    falla:     'Reintentar',
  }

  return (
    <View style={[styles.tarjeta, { borderColor: colorEstado[estado], width: '100%' }]}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={styles.placa}>{placa}</Text>
        <Text style={[styles.estado, { color: colorEstado[estado] }]}>
          {estado.toUpperCase()}
        </Text>
      </View>

      <Text style={styles.detalle}>
        Revisiones: {revisiones}
        {temperatura !== null ? `  ·  Motor: ${temperatura} °C` : ''}
      </Text>

      <View style={{ flexDirection: 'row', gap: 8, marginTop: 8 }}>
        <Pressable
          style={({ pressed }) => [
            styles.boton,
            styles.botonActivo,
            estado === 'revisando' && styles.botonDeshabilitado,
            pressed && { opacity: 0.75 },
            { flex: 1 },
          ]}
          onPress={revisar}
          disabled={estado === 'revisando'}
        >
          <Text style={styles.textoBoton}>{textoBoton[estado]}</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.botonSecundario,
            pressed && { opacity: 0.75 },
            { paddingHorizontal: 16, borderRadius: 8, borderWidth: 1, borderColor: '#1565c0', justifyContent: 'center' },
          ]}
          onPress={reiniciar}
        >
          <Text style={[styles.textoSecundario, { fontSize: 13 }]}>Reiniciar</Text>
        </Pressable>
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
  placa: {
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'monospace',
  },
  estado: {
    fontSize: 12,
    fontWeight: '700',
  },
  detalle: {
    fontSize: 13,
    color: '#666',
  },
  boton: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  botonActivo: {
    backgroundColor: '#1565c0',
  },
  botonDeshabilitado: {
    backgroundColor: '#a5d6a7',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
  botonSecundario: {
    paddingVertical: 10,
  },
  textoSecundario: {
    color: '#1565c0',
    fontSize: 14,
  },
})
