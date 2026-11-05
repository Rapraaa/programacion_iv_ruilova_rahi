// app/index.tsx
import { StyleSheet, Text, View } from 'react-native'
import Paso1 from '@/components/paso1'
import Paso1E from '@/components/personajes'
import Paso2 from '@/components/paso2'
import Paso3 from '@/components/paso3'
import Paso4 from '@/components/paso4'
import Paso4Ejercicio from '@/components/paso4Volumen'
import Paso5 from '@/components/paso5'
import Paso5Volumen from '@/components/paso5Volumen'
import Paso6 from '@/components/paso6'
// ┌──────────────────────────────────────────────────────────────────────┐
// │  Cambia este número y guarda (Ctrl+S) para navegar entre pasos.     │
// │  1  FlatList básica — servidores con nombre/IP/estado               │
// │  2  FlatList avanzada — separadores, vacío, refresh, paginación     │
// │  3  SectionList — servidores agrupados por datacenter               │
// │  4  TextInput tipado — campo de IP con teclado controlado           │
// │  4.1 Ejercicio — calcular volumen (base × altura × profundidad)    │
// │  5  Formulario con validación — agregar servidor                    │
// │  5.1 Ejercicio — volumen con validación de campos                  │
// │  6  KeyboardAvoidingView — formulario sin tapado de teclado         │
// └──────────────────────────────────────────────────────────────────────┘
const PASO: number = 6

export default function Index() {
  switch (PASO) {
    case 1:
      return <Paso1E />
    case 2:
      return <Paso2 />
    case 3:
      return <Paso3 />
    case 4:
      return <Paso4 />
    case 4.1:
      return <Paso4Ejercicio />
    case 5:
      return <Paso5 />
    case 5.1:
      return <Paso5Volumen />
    case 6:
      return <Paso6 />
    default:
      return (
        <View style={styles.centrado}>
          <Text>Paso {PASO}: crea la pantalla primero1</Text>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  centrado: { flex: 1, justifyContent: 'center', alignItems: 'center' },
})

// Los componentes Paso1…Paso6 se añaden en cada sección del tutorial.
