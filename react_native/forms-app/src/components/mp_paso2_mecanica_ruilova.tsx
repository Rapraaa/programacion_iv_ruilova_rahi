import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useState, useCallback } from 'react'
import { Vehiculo, VEHICULOS, MpFilaVehiculo } from './mp_paso1_mecanica_ruilova'

const PAGINA_2: Vehiculo[] = [
  { id: '9',  modelo: 'Renault Duster', placa: 'AZU-1122', listo: true  },
  { id: '10', modelo: 'Great Wall',     placa: 'TUN-3344', listo: false },
]

function Separador() {
  return <View style={styles2.separador} />
}

function ListaVacia() {
  return (
    <View style={styles2.vacio}>
      <Text style={styles2.vacioTexto}>No hay vehiculos en el taller</Text>
      <Text style={styles2.vacioSub}>Registra uno nuevo</Text>
    </View>
  )
}

export default function MpPaso2() {
  const [datos, setDatos] = useState<Vehiculo[]>(VEHICULOS)
  const [refrescando, setRefrescando] = useState(false)
  const [cargandoMas, setCargandoMas] = useState(false)
  const [paginaActual, setPaginaActual] = useState(1)

  const onRefresh = useCallback(() => {
    setRefrescando(true)
    setTimeout(() => {
      setDatos(VEHICULOS)
      setPaginaActual(1)
      setRefrescando(false)
    }, 1000)
  }, [])

  const onEndReached = useCallback(() => {
    if (cargandoMas || paginaActual >= 2) return
    setCargandoMas(true)
    setTimeout(() => {
      setDatos((prev) => [...prev, ...PAGINA_2])
      setPaginaActual(2)
      setCargandoMas(false)
    }, 800)
  }, [cargandoMas, paginaActual])

  return (
    <SafeAreaView style={styles2.contenedor}>
      <Text style={styles2.titulo}>Taller Ruilova · p.{paginaActual}</Text>
      <FlatList<Vehiculo>
        data={datos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MpFilaVehiculo vehiculo={item} />}
        ItemSeparatorComponent={Separador}
        ListEmptyComponent={<ListaVacia />}
        refreshing={refrescando}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.3}
        ListFooterComponent={
          cargandoMas ? (
            <ActivityIndicator style={{ margin: 16 }} color="#1565c0" />
          ) : undefined
        }
      />
    </SafeAreaView>
  )
}

const styles2 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  titulo: {
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
  vacio: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  vacioTexto: { fontSize: 16, fontWeight: '600', color: '#555' },
  vacioSub: { fontSize: 13, color: '#999', marginTop: 6 },
})
