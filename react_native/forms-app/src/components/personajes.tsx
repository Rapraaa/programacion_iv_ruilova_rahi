import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Paso1FilaServidorEjercicio from './listaPersonajes'

export type Personaje = {
  id: string
  nombre: string
  vicio: string
}

const PERSONAJES: Personaje[] = [
  { id: '1', nombre: 'bobesponga', vicio: 'tusi' },
  { id: '2', nombre: 'calamardo', vicio: 'clarinete'},
  { id: '3', nombre: 'patricio',vicio: 'el barrio'},
]

export default function Paso1E() {
  return (
    <SafeAreaView style={styles1.contenedor}>
      <Text style={styles1.titulo}>Inventario de servidores</Text>
      <FlatList<Personaje>
        data={PERSONAJES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Paso1FilaServidorEjercicio personaje={item} />}
      />
    </SafeAreaView>
  )
}

const styles1 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#1565c0',
    color: '#fff',
  },
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 12,
    marginTop: 8,
    borderRadius: 8,
    padding: 12,
  },
})
