import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

import {
  MecanicoProvider,
  useMecanico,
} from '../context/MecanicoContext'


function PerfilMecanico() {
  const { mecanico, setMecanico, especialidad, setEspecialidad } = useMecanico();


  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        Mecanico: {mecanico}
      </Text>

      <Text style={styles.texto}>
        Especialidad: {especialidad}
      </Text>

      <Button
        title="Cambiar mecanico"
        onPress={() =>
          setMecanico('Ayudante del taller')
        }
      />

      <Button
        title="Cambiar especialidad"
        onPress={() =>
          setEspecialidad('Motor y suspension')
        }
      />
    </View>
  );
}


export default function MpPaso5() {
  return (
    <MecanicoProvider>
      <PerfilMecanico />
    </MecanicoProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 12,
  },
  texto: {
    fontSize: 24,
    marginBottom: 20,
  },
});
