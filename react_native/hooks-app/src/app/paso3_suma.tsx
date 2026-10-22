// app/index.tsx — agrega la función Paso3
import { useRef, useState, useEffect } from 'react'
import {
  StyleSheet, Text, TextInput, View, Pressable, TextInput as RNTextInput} from 'react-native'

export default function Paso3suma() {
  // ── Uso 1: referencia a un TextInput para foco programático ─────────
  const inputHostRef = useRef<TextInput>(null)
  const inputPuertoRef = useRef<TextInput>(null)

  const [numero1, setNumero1] = useState<number>(0)
  const [numero2, setNumero2] = useState<number>(0)
  const [total, setTotal] = useState<number>(0)

  // Foco automático al montar la pantalla
  useEffect(() => {
    inputHostRef.current?.focus()
  }, [])


  function suma() {
    setTotal(parseFloat(numero1) + parseFloat(numero2))
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Sumador 3000</Text>

      <View style={styles.formulario}>
        <Text style={styles.etiqueta}>Numero 1</Text>
        <TextInput
          ref={inputHostRef}
          style={styles.input}
          value={numero1}
          onChangeText={setNumero1}
          placeholder="0"
          placeholderTextColor="#aaa"
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() => inputPuertoRef.current?.focus()}
        />

        <Text style={styles.etiqueta}>Numero2</Text>
        <TextInput
          ref={inputPuertoRef}
          style={styles.input}
          value={numero2}
          onChangeText={setNumero2}
          placeholder="Numero2"
          placeholderTextColor="#aaa"
          keyboardType="number-pad"
          returnKeyType="done"
        />
      </View>

      <Pressable
        style={({ pressed }) => [styles.boton, styles.botonActivo, pressed && { opacity: 0.75 }]}
        onPress={suma}
      >
        <Text style={styles.textoBoton}>Sumar</Text>
      </Pressable>

      <Text style={styles.detalle}>Total: {total}</Text>

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
    color: '#ffff',
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
