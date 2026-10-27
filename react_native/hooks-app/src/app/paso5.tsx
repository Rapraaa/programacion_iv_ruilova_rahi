import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

import {
  UsuarioProvider,
  useUsuario,
  useCargo, Cargo
} from '../context/UsuarioContext'


// Componente que consume el contexto
function Perfil() {
  const { usuario, setUsuario } = useUsuario();
  const { cargo, setCargo } = useCargo();


  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        Hola, {usuario}
      </Text>

      <Text style={styles.texto}>
        Hola, tu cargo es {cargo}
      </Text>




      <Button
        title="Cambiar usuario"
        onPress={() =>
          setUsuario('Homero Simpson')
        }
      />

      <Button
        title="Cambiar cargo"
        onPress={() =>
          setUsuario('Obrerin')
        }
      />
    </View>
  );
}


// Componente principal
export default function Paso5() {
  return (
    <UsuarioProvider>
      <Perfil />
    </UsuarioProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  texto: {
    fontSize: 24,
    marginBottom: 20,
  },
});
