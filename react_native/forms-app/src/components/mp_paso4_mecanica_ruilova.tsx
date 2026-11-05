import { useRef, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import type { TextInputInstance } from 'react-native'

export default function MpPaso4() {
  const [cliente, setCliente] = useState('')
  const [placa, setPlaca] = useState('')
  const [kilometraje, setKilometraje] = useState('')
  const [falla, setFalla] = useState('')

  const refPlaca = useRef<TextInputInstance>(null)
  const refKilometraje = useRef<TextInputInstance>(null)
  const refFalla = useRef<TextInputInstance>(null)

  return (
    <SafeAreaView style={styles4.contenedor}>
      <Text style={styles4.titulo}>Recepcion de vehiculo</Text>

      <Text style={styles4.etiqueta}>Cliente</Text>
      <TextInput
        style={styles4.campo}
        value={cliente}
        onChangeText={setCliente}
        placeholder="ej. Rahi Ruilova"
        autoCapitalize="words"
        returnKeyType="next"
        onSubmitEditing={() => refPlaca.current?.focus()}
      />

      <Text style={styles4.etiqueta}>Placa</Text>
      <TextInput
        ref={refPlaca}
        style={styles4.campo}
        value={placa}
        onChangeText={setPlaca}
        placeholder="PBA-1234"
        autoCapitalize="characters"
        autoCorrect={false}
        returnKeyType="next"
        onSubmitEditing={() => refKilometraje.current?.focus()}
      />

      <Text style={styles4.etiqueta}>Kilometraje</Text>
      <TextInput
        ref={refKilometraje}
        style={styles4.campo}
        value={kilometraje}
        onChangeText={setKilometraje}
        placeholder="85000"
        keyboardType="number-pad"
        returnKeyType="next"
        onSubmitEditing={() => refFalla.current?.focus()}
      />

      <Text style={styles4.etiqueta}>Falla reportada</Text>
      <TextInput
        ref={refFalla}
        style={styles4.campo}
        value={falla}
        onChangeText={setFalla}
        placeholder="ej. ruido al frenar"
        returnKeyType="done"
      />

      <View style={styles4.preview}>
        <Text style={styles4.previewTexto}>
          {placa || '<placa>'} · {kilometraje || '0'} km · {cliente || '<cliente>'}
        </Text>
        <Text style={styles4.previewTexto}>
          Falla: {falla || '<sin descripcion>'}
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles4 = StyleSheet.create({
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
  preview: {
    marginTop: 8,
    backgroundColor: '#1a1a2e',
    borderRadius: 8,
    padding: 12,
    gap: 4,
  },
  previewTexto: {
    fontFamily: 'monospace',
    fontSize: 13,
    color: '#a8ff78',
  },
})
