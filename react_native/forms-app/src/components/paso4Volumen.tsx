import { useRef, useState } from 'react'
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import type { TextInputInstance } from 'react-native'

// Convierte el texto del campo a número (acepta coma o punto decimal)
function aNumero(texto: string): number {
  return parseFloat(texto.replace(',', '.'))
}

export default function Paso4Ejercicio() {
  const [base, setBase] = useState('')
  const [altura, setAltura] = useState('')
  const [profundidad, setProfundidad] = useState('')

  const refAltura = useRef<TextInputInstance>(null)
  const refProfundidad = useRef<TextInputInstance>(null)

  const b = aNumero(base)
  const a = aNumero(altura)
  const p = aNumero(profundidad)
  const volumen = b * a * p

  const limpiar = () => {
    setBase('')
    setAltura('')
    setProfundidad('')
  }

  return (
    <SafeAreaView style={styles4e.contenedor}>
      <Text style={styles4e.titulo}>Calcular volumen</Text>

      <Text style={styles4e.etiqueta}>Base (m)</Text>
      <TextInput
        style={styles4e.campo}
        value={base}
        onChangeText={setBase}
        placeholder="ej. 2"
        keyboardType="decimal-pad"
        returnKeyType="next"
        onSubmitEditing={() => refAltura.current?.focus()}
      />

      <Text style={styles4e.etiqueta}>Altura (m)</Text>
      <TextInput
        ref={refAltura}
        style={styles4e.campo}
        value={altura}
        onChangeText={setAltura}
        placeholder="ej. 3"
        keyboardType="decimal-pad"
        returnKeyType="next"
        onSubmitEditing={() => refProfundidad.current?.focus()}
      />

      <Text style={styles4e.etiqueta}>Profundidad (m)</Text>
      <TextInput
        ref={refProfundidad}
        style={styles4e.campo}
        value={profundidad}
        onChangeText={setProfundidad}
        placeholder="ej. 1.5volueming"
        keyboardType="decimal-pad"
        returnKeyType="done"
      />

      <Pressable onPress={limpiar} style={styles4e.boton}>
        <Text style={styles4e.botonTexto}>Limpiar</Text>
      </Pressable>

      <View style={styles4e.preview}>
        <Text style={styles4e.previewTexto}>
          V = {base || '<base>'} × {altura || '<altura>'} × {profundidad || '<profundidad>'}
        </Text>
        <Text style={styles4e.resultado}>
          {volumen !== null
            ? `${volumen.toFixed(2)} m³`
            : 'Ingresa valores mayores a 0'}
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles4e = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8', padding: 16 },
  titulo: { fontSize: 18, fontWeight: '700', color: '#1565c0', marginBottom: 20 },
  etiqueta: { fontSize: 13, fontWeight: '600', color: '#444', marginBottom: 4 },
  campo: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#cfd8dc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    marginBottom: 14,
    color: '#1a1a1a',
  },
  boton: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#e3f2fd',
    borderRadius: 8,
  },
  botonTexto: { fontSize: 13, color: '#1565c0', fontWeight: '600' },
  preview: {
    marginTop: 16,
    backgroundColor: '#1a1a2e',
    borderRadius: 8,
    padding: 12,
  },
  previewTexto: {
    fontFamily: 'monospace',
    fontSize: 13,
    color: '#a8ff78',
  },
  resultado: {
    fontFamily: 'monospace',
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    marginTop: 8,
  },
})
