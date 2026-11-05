import { useState } from 'react'
import type { ReactNode } from 'react'
import { Alert, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

// Número positivo con decimales opcionales (acepta coma o punto)
const REGEX_NUMERO = /^\d+([.,]\d+)?$/

type CamposVolumen = {
  base: string
  altura: string
  profundidad: string
}

type ErroresVolumen = {
  base: string | null
  altura: string | null
  profundidad: string | null
}

const CAMPOS_VACIOS: CamposVolumen = { base: '', altura: '', profundidad: '' }
const SIN_ERRORES: ErroresVolumen = { base: null, altura: null, profundidad: null }

function aNumero(texto: string): number {
  return parseFloat(texto.trim().replace(',', '.'))
}

// Misma regla para las tres medidas: obligatoria, numérica y mayor a 0
function validarMedida(valor: string, nombre: string): string | null {
  if (valor.trim().length === 0) return `La ${nombre} es obligatoria`
  if (!REGEX_NUMERO.test(valor.trim())) return 'Solo números (ej. 2.5)'
  if (aNumero(valor) <= 0) return `La ${nombre} debe ser mayor a 0`
  return null
}

function validar(campos: CamposVolumen): ErroresVolumen {
  return {
    base: validarMedida(campos.base, 'base'),
    altura: validarMedida(campos.altura, 'altura'),
    profundidad: validarMedida(campos.profundidad, 'profundidad'),
  }
}

function hayErrores(errores: ErroresVolumen): boolean {
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
    <View style={styles5v.campoWrapper}>
      <Text style={styles5v.etiqueta}>{etiqueta}</Text>
      {children}
      {error !== null && <Text style={styles5v.textoError}>{error}</Text>}
    </View>
  )
}

export default function Paso5Volumen() {
  const [campos, setCampos] = useState<CamposVolumen>(CAMPOS_VACIOS)
  const [errores, setErrores] = useState<ErroresVolumen>(SIN_ERRORES)
  const [volumen, setVolumen] = useState<number | null>(null)

  function actualizarCampo(campo: keyof CamposVolumen, valor: string) {
    setCampos((prev) => ({ ...prev, [campo]: valor }))
    setVolumen(null)
    // Borra el error del campo mientras el usuario escribe
    if (errores[campo] !== null) {
      setErrores((prev) => ({ ...prev, [campo]: null }))
    }
  }

  function limpiar() {
    setCampos(CAMPOS_VACIOS)
    setErrores(SIN_ERRORES)
    setVolumen(null)
  }

  function onSubmit() {
    const nuevosErrores = validar(campos)
    setErrores(nuevosErrores)
    if (hayErrores(nuevosErrores)) return

    const resultado =
      aNumero(campos.base) * aNumero(campos.altura) * aNumero(campos.profundidad)
    setVolumen(resultado)
    Alert.alert(
      'Volumen calculado',
      `${campos.base} × ${campos.altura} × ${campos.profundidad} = ${resultado.toFixed(2)} m³`,
      [
        { text: 'OK' },
        { text: 'Calcular otro', onPress: limpiar },
      ]
    )
  }

  return (
    <SafeAreaView style={styles5v.contenedor}>
      <ScrollView
        contentContainerStyle={styles5v.scroll}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles5v.titulo}>Calcular volumen</Text>
        <Text style={styles5v.subtitulo}>
          Todas las medidas en metros · campos * obligatorios
        </Text>

        <CampoConError etiqueta="Base (m) *" error={errores.base}>
          <TextInput
            style={[styles5v.campo, errores.base !== null && styles5v.campoError]}
            value={campos.base}
            onChangeText={(v) => actualizarCampo('base', v)}
            placeholder="ej. 2"
            keyboardType="decimal-pad"
            returnKeyType="next"
          />
        </CampoConError>

        <CampoConError etiqueta="Altura (m) *" error={errores.altura}>
          <TextInput
            style={[styles5v.campo, errores.altura !== null && styles5v.campoError]}
            value={campos.altura}
            onChangeText={(v) => actualizarCampo('altura', v)}
            placeholder="ej. 3"
            keyboardType="decimal-pad"
            returnKeyType="next"
          />
        </CampoConError>

        <CampoConError etiqueta="Profundidad (m) *" error={errores.profundidad}>
          <TextInput
            style={[styles5v.campo, errores.profundidad !== null && styles5v.campoError]}
            value={campos.profundidad}
            onChangeText={(v) => actualizarCampo('profundidad', v)}
            placeholder="ej. 1.5"
            keyboardType="decimal-pad"
            returnKeyType="done"
            onSubmitEditing={onSubmit}
          />
        </CampoConError>

        <Pressable
          style={({ pressed }) => [
            styles5v.botonEnviar,
            pressed && styles5v.botonEnviarPresionado,
            volumen !== null && styles5v.botonEnviarExito,
          ]}
          onPress={onSubmit}
        >
          <Text style={styles5v.textoBoton}>
            {volumen !== null ? '✓ Calculado' : 'Calcular volumen'}
          </Text>
        </Pressable>

        {/* Resultado (también visible en web, donde Alert no aparece) */}
        {volumen !== null && (
          <View style={styles5v.resultado}>
            <Text style={styles5v.resultadoFormula}>
              V = {campos.base} × {campos.altura} × {campos.profundidad}
            </Text>
            <Text style={styles5v.resultadoValor}>{volumen.toFixed(2)} m³</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles5v = StyleSheet.create({
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
  resultado: {
    marginTop: 16,
    backgroundColor: '#1a1a2e',
    borderRadius: 8,
    padding: 12,
  },
  resultadoFormula: { fontFamily: 'monospace', fontSize: 13, color: '#a8ff78' },
  resultadoValor: {
    fontFamily: 'monospace',
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    marginTop: 8,
  },
})
