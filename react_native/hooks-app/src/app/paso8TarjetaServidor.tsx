export default function Paso8Tarjeta() {
  interface PropsTarjeta {
    nombre: string
    hook: ReturnType<typeof useConexionSimulada>
  }
const { estado, intentos, latencia, reconectar, reiniciar } = hook


const colorEstado: Record<string, string> = {
    desconectado: '#757575',
    conectando:   '#1565c0',
    conectado:    '#2e7d32',
    error:        '#c62828',
  }

const textoBoton: Record<string, string> = {
    desconectado: 'Conectar',
    conectando:   'Conectando…',
    conectado:    'Reconectar',
    error:        'Reintentar',
  }

return (
  <View style={[styles.tarjeta, { borderColor: colorEstado[estado], width: '100%' }]}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <Text style={styles.nombreServidor}>{nombre}</Text>
      <Text style={[styles.etiqueta, { color: colorEstado[estado] }]}>
        {estado.toUpperCase()}
      </Text>
    </View>

    <Text style={styles.detalle}>
      Intentos: {intentos}
      {latencia !== null ? `  ·  Latencia: ${latencia} ms` : ''}
    </Text>

    <View style={{ flexDirection: 'row', gap: 8, marginTop: 8 }}>
      <Pressable
        style={({ pressed }) => [
          styles.boton,
          styles.botonActivo,
          estado === 'conectando' && styles.botonDeshabilitado,
          pressed && { opacity: 0.75 },
          { flex: 1 },
        ]}
        onPress={reconectar}
        disabled={estado === 'conectando'}
      >
        <Text style={styles.textoBoton}>{textoBoton[estado]}</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [
          styles.botonSecundario,
          pressed && { opacity: 0.75 },
          { paddingHorizontal: 16, borderRadius: 8, borderWidth: 1, borderColor: '#1565c0', justifyContent: 'center' },
        ]}
        onPress={reiniciar}
      >
        <Text style={[styles.textoSecundario, { fontSize: 13 }]}>Reiniciar</Text>
      </Pressable>
    </View>
  </View>
)
}
