import { useState } from 'react'
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'

export default function MpPaso6() {
  const [placa, setPlaca] = useState('')
  const [modelo, setModelo] = useState('')
  const [kilometraje, setKilometraje] = useState('')
  const [observaciones, setObservaciones] = useState('')
  const [error, setError] = useState<string | null>(null)

  function onRegistrar() {
    if (!placa.trim() || !modelo.trim() || !kilometraje.trim()) {
      setError('Completa todos los campos antes de continuar')
      return
    }
    setError(null)
    Alert.alert('Vehiculo registrado', `${modelo} · ${placa} · ${kilometraje} km\nObservaciones: ${observaciones || 'ninguna'}`)
  }

  return (
    <KeyboardAvoidingView
      style={styles6.raiz}
      behavior={Platform.select({ ios: 'padding', android: 'height' })}
      keyboardVerticalOffset={Platform.select({ ios: 0, android: 24 })}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles6.cabecera}>
          <Text style={styles6.cabeceraTitulo}>Ingreso al taller</Text>
          <Text style={styles6.cabeceraSub}>Recibe: Rahi Ruilova</Text>
        </View>

        <ScrollView
          contentContainerStyle={styles6.cuerpo}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles6.etiquetaCampo}>Placa</Text>
          <TextInput
            style={styles6.campo}
            value={placa}
            onChangeText={setPlaca}
            placeholder="PBA-1234"
            autoCapitalize="characters"
            autoCorrect={false}
          />

          <Text style={styles6.etiquetaCampo}>Modelo</Text>
          <TextInput
            style={styles6.campo}
            value={modelo}
            onChangeText={setModelo}
            placeholder="Toyota Hilux"
          />

          <Text style={styles6.etiquetaCampo}>Kilometraje</Text>
          <TextInput
            style={styles6.campo}
            value={kilometraje}
            onChangeText={setKilometraje}
            placeholder="85000"
            keyboardType="number-pad"
          />

          <Text style={styles6.etiquetaCampo}>Observaciones (opcional)</Text>
          <TextInput
            style={[styles6.campo, styles6.campoMultilinea]}
            value={observaciones}
            onChangeText={setObservaciones}
            placeholder="Ruido en la suspension delantera, revisar frenos"
            multiline
            numberOfLines={3}
            textAlignVertical="top"
          />

          {error !== null && (
            <View style={styles6.bannerError}>
              <Text style={styles6.bannerErrorTexto}>{error}</Text>
            </View>
          )}

          <Pressable
            style={({ pressed }) => [
              styles6.boton,
              pressed && { opacity: 0.8 },
            ]}
            onPress={onRegistrar}
          >
            <Text style={styles6.textoBoton}>Registrar vehiculo</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

const styles6 = StyleSheet.create({
  raiz: { flex: 1, backgroundColor: '#f0f4f8' },
  cabecera: {
    backgroundColor: '#1565c0',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  cabeceraTitulo: { fontSize: 18, fontWeight: '700', color: '#fff' },
  cabeceraSub: { fontSize: 11, color: '#90caf9', marginTop: 2 },
  cuerpo: { padding: 20, paddingBottom: 40 },
  etiquetaCampo: { fontSize: 13, fontWeight: '600', color: '#444', marginBottom: 4 },
  campo: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#cfd8dc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: '#1a1a1a',
    marginBottom: 16,
  },
  campoMultilinea: { height: 80, paddingTop: 10 },
  bannerError: {
    backgroundColor: '#ffebee',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    borderLeftWidth: 3,
    borderLeftColor: '#e53935',
  },
  bannerErrorTexto: { fontSize: 13, color: '#c62828' },
  boton: {
    backgroundColor: '#1565c0',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  textoBoton: { color: '#fff', fontWeight: '700', fontSize: 16 },
})
