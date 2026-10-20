// ─── Paso 1 —Simpson ──────────────────────────────────────────
import { StyleSheet, Text, View } from 'react-native'


interface TarjetaServidorProps {
  nombre: string
  edad: number
  ocupacion: string
  frase: string
}

function TarjetaServidor({ nombre, edad, ocupacion, frase }: TarjetaServidorProps) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.nombrePersonaje}>{nombre}</Text>
      <Text style={styles.datoEdad}>{edad}</Text>
      <Text style={styles.datoOcupacion}>{ocupacion}</Text>
      <Text style={styles.datoFrase}>{frase}</Text>
    </View>
  )
}

export function Paso1_Simpson() {
  return (
    <View style={styles.fondo}>
      <Text style={styles.encabezado}>Los Simpson</Text>
      <TarjetaServidor
        nombre="Honero Simpson"
        edad={39}
        ocupacion='Inspector de seguridad'
        frase='D`oh'
      />
      <TarjetaServidor
        nombre="Bart Simpson"
        edad={10}
        ocupacion='Estudiante'
        frase='Multiplicate por cero'
      />
      <TarjetaServidor
        nombre="Lisa Simpson"
        edad={8}
        ocupacion='Estudiante y Saxofonista'
        frase='Si alguien me necesita estare en mi habitacion'
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
  nombrePersonaje: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  datoEdad: {
    fontSize: 13,
    color: '#1565c0',
    fontFamily: 'monospace',
  },
  datoOcupacion: {
    fontSize: 13,
    color: '#1565c0',
    fontFamily: 'monospace',
  },
  datoFrase: {
    fontSize: 12,
    color: '#757575',
  },
})