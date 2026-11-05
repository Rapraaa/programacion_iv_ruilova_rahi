import { useState, useEffect, useCallback } from 'react'

type EstadoDiagnostico = 'pendiente' | 'revisando' | 'ok' | 'falla'

interface ResultadoDiagnostico {
  estado: EstadoDiagnostico
  revisiones: number
  temperatura: number | null
  revisar: () => void
  reiniciar: () => void
}

export function useDiagnosticoSimulado(placa: string): ResultadoDiagnostico {
  const [estado, setEstado] = useState<EstadoDiagnostico>('pendiente')
  const [revisiones, setRevisiones] = useState<number>(0)
  const [temperatura, setTemperatura] = useState<number | null>(null)
  const [disparador, setDisparador] = useState<number>(0)

  useEffect(() => {
    if (estado !== 'revisando') return

    const timeout = setTimeout(() => {
      const falla = Math.random() < 0.4
      setRevisiones(n => n + 1)

      if (falla) {
        setEstado('falla')
        setTemperatura(null)
      } else {
        const grados = Math.floor(Math.random() * 20) + 85
        setTemperatura(grados)
        setEstado('ok')
      }
    }, 1200)

    return () => clearTimeout(timeout)
  }, [estado, disparador])

  const revisar = useCallback(() => {
    setEstado('revisando')
    setDisparador(d => d + 1)
  }, [])

  const reiniciar = useCallback(() => {
    setEstado('pendiente')
    setRevisiones(0)
    setTemperatura(null)
  }, [])

  return { estado, revisiones, temperatura, revisar, reiniciar }
}
