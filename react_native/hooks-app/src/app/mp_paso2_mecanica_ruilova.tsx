import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'

type EstadoMotor = 'midiendo' | 'normal' | 'sobrecalentado' | 'apagado'

export function MpPaso2() {
  const [temperatura, setTemperatura] = useState<number | null>(null)
  const [estado, setEstado] = useState<EstadoMotor>('apagado')
  const [activo, setActivo] = useState<boolean>(false)
  const [lecturas, setLecturas] = useState<number>(0)

  useEffect(() => {
    if (!activo) return

    const intervalo = setInterval(() => {
      setEstado('midiendo')

      setTimeout(() => {
        const grados = Math.floor(Math.random() * 40) + 75
        setTemperatura(grados)
        setEstado(grados > 105 ? 'sobrecalentado' : 'normal')
        setLecturas(l => l + 1)
      }, 400)
    }, 2000)

    return () => clearInterval(intervalo)
  }, [activo])

  const colorEstado: Record<EstadoMotor, string> = {
    midiendo:       '#1565c0',
    normal:         '#2e7d32',
    sobrecalentado: '#c62828',
    apagado:        '#757575',
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Temperatura del Motor</Text>

      <View style={[styles.tarjeta, { borderColor: colorEstado[estado] }]}>
        <Text style={[styles.estado, { color: colorEstado[estado] }]}>
          {estado.toUpperCase()}
        </Text>
        <Text style={styles.temperatura}>
          {temperatura !== null ? `${temperatura} °C` : '— °C'}
        </Text>
        <Text style={styles.detalle}>Lecturas realizadas: {lecturas}</Text>
        <Text style={styles.detalle}>Toyota Hilux · Rahi Ruilova</Text>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.boton,
          activo ? styles.botonDetener : styles.botonIniciar,
          pressed && { opacity: 0.75 },
        ]}
        onPress={() => setActivo(a => !a)}
      >
        <Text style={styles.textoBoton}>
          {activo ? 'Detener medicion' : 'Iniciar medicion'}
        </Text>
      </Pressable>
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
  estado: {
    fontSize: 15,
    fontWeight: '600',
  },
  temperatura: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1a1a1a',
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
  botonIniciar: {
    backgroundColor: '#1565c0',
  },
  botonDetener: {
    backgroundColor: '#c62828',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
})
