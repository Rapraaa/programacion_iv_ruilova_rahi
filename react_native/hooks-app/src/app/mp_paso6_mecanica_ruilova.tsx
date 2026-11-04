import { useMemo, useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';


interface Repuesto {
  nombre: string;
  precio: number;
  cantidad: number;
}


export default function MpPaso6() {
  const [repuestos, setRepuestos] = useState<Repuesto[]>([
    { nombre: 'Filtro de aceite', precio: 8, cantidad: 2 },
    { nombre: 'Pastillas de freno', precio: 35, cantidad: 1 },
    { nombre: 'Bujias', precio: 6, cantidad: 4 },
  ]);


  const [contador, setContador] = useState<number>(0);


  const total = useMemo(() => {
    console.log('Calculando total...');


    return repuestos.reduce(
      (acumulado, repuesto) =>
        acumulado + repuesto.precio * repuesto.cantidad,
      0
    );
  }, [repuestos]);


  function agregarRepuesto() {
    setRepuestos((actuales) => [
      ...actuales,
      { nombre: 'Bateria', precio: 90, cantidad: 1 },
    ]);
  }


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Repuestos - Taller Ruilova
      </Text>


      <Text>Repuestos: {repuestos.length}</Text>


      <Text style={styles.total}>
        Total: ${total.toFixed(2)}
      </Text>


      <Button
        title="Incrementar contador"
        onPress={() => setContador((c) => c + 1)}
      />


      <Text>Contador: {contador}</Text>


      <Button
        title="Agregar bateria"
        onPress={agregarRepuesto}
      />

      <Text>Mecanico: Rahi Ruilova</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    gap: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
