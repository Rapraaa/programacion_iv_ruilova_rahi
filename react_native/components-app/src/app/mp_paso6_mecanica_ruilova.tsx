import { useState } from 'react'
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { BadgeEstado } from './mp_paso3_mecanica_ruilova'
import { Card, FilaInfo } from './mp_paso2_mecanica_ruilova'
import { ModalConfirm } from './mp_paso5_mecanica_ruilova'

interface AccionProps {
  etiqueta: string
  color: string
  onPress: () => void
}

function BotonAccion({ etiqueta, color, onPress }: AccionProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        estilos6.botonAccion,
        { backgroundColor: color },
        pressed && { opacity: 0.75 },
      ]}
      onPress={onPress}
    >
      <Text style={estilos6.textoBotonAccion}>{etiqueta}</Text>
    </Pressable>
  )
}

export function MpPaso6() {
  const [modalVisible, setModalVisible] = useState(false)
  const [accionPendiente, setAccionPendiente] = useState<string>('')
  const [log, setLog] = useState<string[]>([])

  function pedirConfirmacion(accion: string) {
    setAccionPendiente(accion)
    setModalVisible(true)
  }

  function ejecutarAccion() {
    const entrada = `[${new Date().toLocaleTimeString()}] ${accionPendiente} realizado en Toyota Hilux`
    setLog((prev) => [entrada, ...prev])
    setModalVisible(false)
  }

  return (
    <SafeAreaView style={estilos6.safeArea}>
      <View style={estilos6.cabecera}>
        <View>
          <Text style={estilos6.cabNombre}>Toyota Hilux</Text>
          <Text style={estilos6.cabPlaca}>PBA-1234 · Rahi Ruilova</Text>
        </View>
        <BadgeEstado estado="revision" mostrarIcono tamaño={12} />
      </View>

      <ScrollView
        contentContainerStyle={estilos6.scrollContenido}
        showsVerticalScrollIndicator={false}
      >
        <Card titulo="Diagnostico del vehiculo" subtitulo="Ultima revision: hace 30 min">
          <FilaInfo etiqueta="Motor" valor="Temperatura 90 °C" />
          <FilaInfo etiqueta="Aceite" valor="60% · 15W-40" />
          <FilaInfo etiqueta="Frenos" valor="Desgaste 70%" />
          <FilaInfo etiqueta="Llantas" valor="32 PSI · 4 / 4" />
          <FilaInfo etiqueta="Bateria" valor="12.4 V" />
        </Card>

        <Card titulo="Datos del vehiculo">
          <FilaInfo etiqueta="Cliente" valor="Maria Torres" />
          <FilaInfo etiqueta="Kilometraje" valor="150000 km" />
          <FilaInfo etiqueta="Motor" valor="2.4 Diesel" />
          <FilaInfo etiqueta="Año" valor="2020" />
          <FilaInfo etiqueta="Bahia" valor="Elevador 2" />
        </Card>

        <Card titulo="Acciones">
          <View style={estilos6.gridAcciones}>
            <BotonAccion
              etiqueta="Cambiar aceite"
              color="#1565c0"
              onPress={() => pedirConfirmacion('Cambio de aceite')}
            />
            <BotonAccion
              etiqueta="Frenos"
              color="#b71c1c"
              onPress={() => pedirConfirmacion('Cambio de frenos')}
            />
            <BotonAccion
              etiqueta="Alinear"
              color="#2e7d32"
              onPress={() => pedirConfirmacion('Alineacion')}
            />
            <BotonAccion
              etiqueta="Diagnostico"
              color="#6a1b9a"
              onPress={() => pedirConfirmacion('Diagnostico')}
            />
          </View>
        </Card>

        {log.length > 0 && (
          <Card titulo="Actividad reciente">
            {log.map((entrada, i) => (
              <Text key={i} style={estilos6.entradaLog}>{entrada}</Text>
            ))}
          </Card>
        )}
      </ScrollView>

      <ModalConfirm
        visible={modalVisible}
        titulo={`Confirmar: ${accionPendiente}`}
        mensaje={`¿Realizar "${accionPendiente}" en la Toyota Hilux?\nSe agregara al costo del servicio.`}
        etiquetaConfirmar="Realizar"
        onConfirmar={ejecutarAccion}
        onCancelar={() => setModalVisible(false)}
      />
    </SafeAreaView>
  )
}

const estilos6 = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  cabecera: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e7ef',
  },
  cabNombre: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a237e',
  },
  cabPlaca: {
    fontSize: 12,
    color: '#78909c',
    fontFamily: 'monospace',
    marginTop: 2,
  },
  scrollContenido: {
    padding: 16,
    gap: 14,
    paddingBottom: 40,
  },
  gridAcciones: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  botonAccion: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    minWidth: '45%',
    alignItems: 'center',
  },
  textoBotonAccion: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },
  entradaLog: {
    fontSize: 11,
    color: '#2e7d32',
    fontFamily: 'monospace',
    lineHeight: 18,
  },
})
