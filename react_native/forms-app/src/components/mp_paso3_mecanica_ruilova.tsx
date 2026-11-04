import { SafeAreaView, SectionList, StyleSheet, Text, View } from 'react-native'
import { Vehiculo, MpFilaVehiculo } from './mp_paso1_mecanica_ruilova'

type SeccionArea = {
  title: string
  encargado: string
  data: Vehiculo[]
}

const SECCIONES: SeccionArea[] = [
  {
    title: 'Mecanica general',
    encargado: 'Rahi Ruilova',
    data: [
      { id: 's1', modelo: 'Toyota Hilux',   placa: 'PBA-1234', listo: true  },
      { id: 's2', modelo: 'Ford F-150',     placa: 'CUE-7890', listo: false },
      { id: 's3', modelo: 'Mazda BT-50',    placa: 'PBC-2468', listo: true  },
    ],
  },
  {
    title: 'Frenos y suspension',
    encargado: 'Rahi Ruilova',
    data: [
      { id: 's4', modelo: 'Kia Sportage',   placa: 'UIO-9012', listo: false },
      { id: 's5', modelo: 'Chevrolet Sail', placa: 'GYE-5678', listo: true  },
    ],
  },
  {
    title: 'Electricidad',
    encargado: 'Ayudante',
    data: [
      { id: 's6', modelo: 'Hyundai Tucson', placa: 'LOJ-3456', listo: true  },
      { id: 's7', modelo: 'Suzuki Vitara',  placa: 'GYA-1357', listo: false },
    ],
  },
]

function Separador() {
  return <View style={styles3.separador} />
}

function EncabezadoSeccion({ titulo, encargado }: { titulo: string; encargado: string }) {
  return (
    <View style={styles3.encabezado}>
      <Text style={styles3.encabezadoTitulo}>{titulo}</Text>
      <Text style={styles3.encabezadoEncargado}>{encargado}</Text>
    </View>
  )
}

export default function MpPaso3() {
  return (
    <SafeAreaView style={styles3.contenedor}>
      <Text style={styles3.tituloPantalla}>Areas del taller</Text>
      <SectionList<Vehiculo, SeccionArea>
        sections={SECCIONES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MpFilaVehiculo vehiculo={item} />}
        renderSectionHeader={({ section }) => (
          <EncabezadoSeccion titulo={section.title} encargado={section.encargado} />
        )}
        stickySectionHeadersEnabled
        ItemSeparatorComponent={Separador}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </SafeAreaView>
  )
}

const styles3 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  tituloPantalla: {
    fontSize: 20,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#1565c0',
    color: '#fff',
  },
  separador: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 12,
  },
  encabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e3f2fd',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#1565c0',
  },
  encabezadoTitulo: { fontSize: 13, fontWeight: '700', color: '#0d47a1' },
  encabezadoEncargado: { fontSize: 11, color: '#546e7a' },
})
