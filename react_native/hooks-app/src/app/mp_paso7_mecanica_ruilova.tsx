import {
  useState,
  useCallback,
  memo,
} from 'react';


import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
} from 'react-native';


interface Orden {
  id: number;
  vehiculo: string;
  trabajo: string;
}


interface OrdenItemProps {
  orden: Orden;
  onTerminar: (id: number) => void;
}


const OrdenItem = memo(
  ({ orden, onTerminar }: OrdenItemProps) => {
    console.log('Renderizando:', orden.vehiculo);


    return (
      <View style={styles.orden}>
        <Text>
          {orden.vehiculo} - {orden.trabajo}
        </Text>


        <Button
          title="Terminar"
          onPress={() => onTerminar(orden.id)}
        />
      </View>
    );
  }
);


export default function MpPaso7() {
  const [ordenes, setOrdenes] = useState<Orden[]>([
    { id: 1, vehiculo: 'Toyota Hilux', trabajo: 'Cambio de aceite' },
    { id: 2, vehiculo: 'Kia Sportage', trabajo: 'Frenos' },
  ]);


  const [contador, setContador] = useState(0);


  const terminarOrden = useCallback((id: number) => {
    setOrdenes((actuales) =>
      actuales.filter((orden) => orden.id !== id)
    );
  }, []);


  const agregarOrden = useCallback(() => {
    setOrdenes((actuales) => [
      ...actuales,
      {
        id: Date.now(),
        vehiculo: 'Chevrolet Sail',
        trabajo: 'Alineacion',
      },
    ]);
  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Ordenes de Rahi Ruilova
      </Text>


      <Text>Contador: {contador}</Text>


      <Button
        title="Incrementar contador"
        onPress={() => setContador((c) => c + 1)}
      />


      <Button
        title="Agregar orden"
        onPress={agregarOrden}
      />


      <FlatList
        data={ordenes}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <OrdenItem
            orden={item}
            onTerminar={terminarOrden}
          />
        )}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 60,
    gap: 12,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  orden: {
    padding: 12,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    gap: 8,
  },
});
