import { useState } from 'react'
import type { ReactNode } from 'react'
import { Alert, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

const REGEX_PLACA = /^[A-Z]{3}-\d{3,4}$/

type CamposOrden = {
  cliente: string
  placa: string
  kilometraje: string
}

type ErroresOrden = {
  cliente: string | null
  placa: string | null
  kilometraje: string | null
}

function validar(campos: CamposOrden): ErroresOrden {
  const errores: ErroresOrden = { cliente: null, placa: null, kilometraje: null }

  if (campos.cliente.trim().length === 0) {
    errores.cliente = 'El cliente es obligatorio'
  } else if (campos.cliente.trim().length < 3) {
    errores.cliente = 'El nombre debe tener al menos 3 caracteres'
  }

  if (campos.placa.trim().length === 0) {
    errores.placa = 'La placa es obligatoria'
  } else if (!REGEX_PLACA.test(campos.placa.trim().toUpperCase())) {
    errores.placa = 'Formato invalido (ej. PBA-1234)'
  }

  const km = Number(campos.kilometraje)
  if (campos.kilometraje.trim().length === 0) {
    errores.kilometraje = 'El kilometraje es obligatorio'
  } else if (!Number.isInteger(km) || km < 0) {
    errores.kilometraje = 'Kilometraje invalido'
  }

  return errores
}

function hayErrores(errores: ErroresOrden): boolean {
  return Object.values(errores).some((e) => e !== null)
}

function CampoConError({
  etiqueta,
  children,
  error,
}: {
  etiqueta: string
  children: ReactNode
  error: string | null
}) {
  return (
    <View style={styles5.campoWrapper}>
      <Text style={styles5.etiqueta}>{etiqueta}</Text>
      {children}
      {error !== null && <Text style={styles5.textoError}>{error}</Text>}
    </View>
  )
}

export default function MpPaso5() {
  const [campos, setCampos] = useState<CamposOrden>({
    cliente: '',
    placa: '',
    kilometraje: '',
  })
  const [errores, setErrores] = useState<ErroresOrden>({
    cliente: null,
    placa: null,
    kilometraje: null,
  })
  const [enviado, setEnviado] = useState(false)

  function actualizarCampo(campo: keyof CamposOrden, valor: string) {
    setCampos((prev) => ({ ...prev, [campo]: valor }))
    if (errores[campo] !== null) {
      setErrores((prev) => ({ ...prev, [campo]: null }))
    }
  }

  function onSubmit() {
    const nuevosErrores = validar(campos)
    setErrores(nuevosErrores)
    if (hayErrores(nuevosErrores)) return

    setEnviado(true)
    Alert.alert(
      'Orden creada',
      `${campos.cliente} · ${campos.placa.toUpperCase()} · ${campos.kilometraje} km`,
      [
        {
          text: 'Nueva orden',
          onPress: () => {
            setCampos({ cliente: '', placa: '', kilometraje: '' })
            setErrores({ cliente: null, placa: null, kilometraje: null })
            setEnviado(false)
          },
        },
      ]
    )
  }

  return (
    <SafeAreaView style={styles5.contenedor}>
      <ScrollView
        contentContainerStyle={styles5.scroll}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles5.titulo}>Nueva orden de trabajo</Text>
        <Text style={styles5.subtitulo}>
          Mecanico: Rahi Ruilova · campos * obligatorios
        </Text>

        <CampoConError etiqueta="Cliente *" error={errores.cliente}>
          <TextInput
            style={[
              styles5.campo,
              errores.cliente !== null && styles5.campoError,
            ]}
            value={campos.cliente}
            onChangeText={(v) => actualizarCampo('cliente', v)}
            placeholder="ej. Rahi Ruilova"
            autoCapitalize="words"
            returnKeyType="next"
          />
        </CampoConError>

        <CampoConError etiqueta="Placa *" error={errores.placa}>
          <TextInput
            style={[
              styles5.campo,
              errores.placa !== null && styles5.campoError,
            ]}
            value={campos.placa}
            onChangeText={(v) => actualizarCampo('placa', v)}
            placeholder="PBA-1234"
            autoCapitalize="characters"
            autoCorrect={false}
            returnKeyType="next"
          />
        </CampoConError>

        <CampoConError etiqueta="Kilometraje *" error={errores.kilometraje}>
          <TextInput
            style={[
              styles5.campo,
              errores.kilometraje !== null && styles5.campoError,
            ]}
            value={campos.kilometraje}
            onChangeText={(v) => actualizarCampo('kilometraje', v)}
            placeholder="85000"
            keyboardType="number-pad"
            returnKeyType="done"
            onSubmitEditing={onSubmit}
          />
        </CampoConError>

        <Pressable
          style={({ pressed }) => [
            styles5.botonEnviar,
            pressed && styles5.botonEnviarPresionado,
            enviado && styles5.botonEnviarExito,
          ]}
          onPress={onSubmit}
        >
          <Text style={styles5.textoBoton}>
            {enviado ? '✓ Creada' : 'Crear orden'}
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles5 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  scroll: { padding: 20, paddingBottom: 40 },
  titulo: { fontSize: 20, fontWeight: '700', color: '#1565c0', marginBottom: 4 },
  subtitulo: { fontSize: 12, color: '#888', marginBottom: 20 },
  campoWrapper: { marginBottom: 16 },
  etiqueta: { fontSize: 13, fontWeight: '600', color: '#444', marginBottom: 4 },
  campo: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#cfd8dc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: '#1a1a1a',
  },
  campoError: {
    borderColor: '#e53935',
    backgroundColor: '#fff8f8',
  },
  textoError: {
    fontSize: 12,
    color: '#e53935',
    marginTop: 4,
  },
  botonEnviar: {
    backgroundColor: '#1565c0',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  botonEnviarPresionado: { backgroundColor: '#0d47a1' },
  botonEnviarExito: { backgroundColor: '#2e7d32' },
  textoBoton: { color: '#fff', fontWeight: '700', fontSize: 16 },
})
