import { useRef, useState, useEffect } from 'react'
import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native'

export default function MpPaso3() {
  const inputPlacaRef = useRef<TextInput>(null)
  const inputKilometrajeRef = useRef<TextInput>(null)

  const [placa, setPlaca] = useState<string>('')
  const [kilometraje, setKilometraje] = useState<string>('0')

  useEffect(() => {
    inputPlacaRef.current?.focus()
  }, [])

  const registrosRef = useRef<number>(0)
  const [ultimoRegistro, setUltimoRegistro] = useState<string>('—')

  function registrarVehiculo() {
    registrosRef.current += 1
    setUltimoRegistro(
      `${placa || 'sin placa'} · ${kilometraje} km — registro #${registrosRef.current}`
    )
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Registrar Vehiculo</Text>

      <View style={styles.formulario}>
        <Text style={styles.etiqueta}>Placa</Text>
        <TextInput
          ref={inputPlacaRef}
          style={styles.input}
          value={placa}
          onChangeText={setPlaca}
          placeholder="PBA-1234"
          placeholderTextColor="#aaa"
          autoCapitalize="characters"
          returnKeyType="next"
          onSubmitEditing={() => inputKilometrajeRef.current?.focus()}
        />

        <Text style={styles.etiqueta}>Kilometraje</Text>
        <TextInput
          ref={inputKilometrajeRef}
          style={styles.input}
          value={kilometraje}
          onChangeText={setKilometraje}
          placeholder="0"
          placeholderTextColor="#aaa"
          keyboardType="number-pad"
          returnKeyType="done"
        />
      </View>

      <Pressable
        style={({ pressed }) => [styles.boton, styles.botonActivo, pressed && { opacity: 0.75 }]}
        onPress={registrarVehiculo}
      >
        <Text style={styles.textoBoton}>Registrar</Text>
      </Pressable>

      <Text style={styles.detalle}>Ultimo registro: {ultimoRegistro}</Text>
      <Text style={styles.detalle}>Mecanico: Rahi Ruilova</Text>
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
  formulario: {
    width: '100%',
    gap: 8,
  },
  etiqueta: {
    fontSize: 13,
    fontWeight: '600',
    color: '#546e7a',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#fff',
    fontSize: 15,
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
  textoBoton: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
})
