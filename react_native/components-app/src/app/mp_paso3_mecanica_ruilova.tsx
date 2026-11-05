import { Pressable, StyleSheet, Text, View } from 'react-native'

type EstadoVehiculo = 'listo' | 'revision' | 'espera' | 'falla' | 'mantenimiento'

interface BadgeEstadoProps {
  estado: EstadoVehiculo
  tamaño?: number
  mostrarIcono?: boolean
}

const COLOR_ESTADO: Record<EstadoVehiculo, { fondo: string; texto: string }> = {
  listo:         { fondo: '#e8f5e9', texto: '#2e7d32' },
  revision:      { fondo: '#fff8e1', texto: '#f57f17' },
  espera:        { fondo: '#f5f5f5', texto: '#616161' },
  falla:         { fondo: '#fce4ec', texto: '#c62828' },
  mantenimiento: { fondo: '#e1f5fe', texto: '#0288d1' },
}

const ICONO_ESTADO: Record<EstadoVehiculo, string> = {
  listo:         '●',
  revision:      '◐',
  espera:        '○',
  falla:         '✕',
  mantenimiento: '🔧',
}

export function BadgeEstado({
  estado,
  tamaño = 12,
  mostrarIcono = false,
}: BadgeEstadoProps) {
  const colores = COLOR_ESTADO[estado]
  return (
    <View style={[estilos3.badge, { backgroundColor: colores.fondo }]}>
      {mostrarIcono && (
        <Text style={[estilos3.icono, { color: colores.texto, fontSize: tamaño }]}>
          {ICONO_ESTADO[estado]}{' '}
        </Text>
      )}
      <Text style={[estilos3.textoBadge, { color: colores.texto, fontSize: tamaño }]}>
        {estado.toUpperCase()}
      </Text>
    </View>
  )
}

interface FilaVehiculoProps {
  modelo: string
  placa: string
  estado: EstadoVehiculo
  horas?: number
  onPress?: () => void
}

function FilaVehiculo({ modelo, placa, estado, horas, onPress }: FilaVehiculoProps) {
  return (
    <Pressable onPress={onPress} style={estilos3.fila}>
      <View style={estilos3.infoIzq}>
        <Text style={estilos3.nombreVehiculo}>{modelo}</Text>
        <Text style={estilos3.placaTexto}>{placa}</Text>
      </View>
      <View style={estilos3.infoDer}>
        {horas !== undefined && (
          <Text style={estilos3.horas}>{horas} h</Text>
        )}
        <BadgeEstado estado={estado} mostrarIcono={false} tamaño={11} />
      </View>
    </Pressable>
  )
}

export function MpPaso3() {
  return (
    <View style={estilos3.fondo}>
      <Text style={estilos3.titulo}>Estado del taller</Text>
      <FilaVehiculo modelo="Toyota Hilux"   placa="PBA-1234" estado="listo"    horas={3} onPress={() => console.log('Tapped Hilux')} />
      <FilaVehiculo modelo="Chevrolet Sail" placa="GYE-5678" estado="listo"    horas={1} />
      <FilaVehiculo modelo="Kia Sportage"   placa="UIO-9012" estado="revision" horas={5} />
      <FilaVehiculo modelo="Hyundai Accent" placa="LOJ-3456" estado="falla"    />
      <FilaVehiculo modelo="Ford F-150"     placa="CUE-7890" estado="espera"   />
      <FilaVehiculo modelo="Mazda 3"        placa="AMB-1122" estado="mantenimiento" />
    </View>
  )
}

const estilos3 = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
    paddingTop: 60,
    gap: 8,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a237e',
    marginBottom: 8,
  },
  fila: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
  },
  infoIzq: { gap: 2 },
  infoDer: { alignItems: 'flex-end', gap: 4 },
  nombreVehiculo: { fontSize: 14, fontWeight: '600', color: '#1a1a1a' },
  placaTexto: { fontSize: 12, color: '#90a4ae', fontFamily: 'monospace' },
  horas: { fontSize: 11, color: '#546e7a' },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  icono: { fontWeight: '700' },
  textoBadge: { fontWeight: '600' },
})
