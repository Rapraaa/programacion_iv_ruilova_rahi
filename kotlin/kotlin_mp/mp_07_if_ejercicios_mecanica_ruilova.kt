data class Elevador(
    val capacidad: Int,
    val activo: Boolean
)

data class Bateria(
    val marca: String,
    val carga: Int
)

data class Vehiculo(
    val combustible: Int,
    val motorRevisado: Boolean,
    val pagado: Boolean
)

fun main() {
    val elevador = Elevador(1500, true)
    if (elevador.capacidad >= 2000 && elevador.activo) {
        println("Rahi puede subir la camioneta al elevador")
    } else {
        println("El elevador no soporta la camioneta")
    }

    val presionLlantas = arrayOf(32, 30, 45, 31)
    if (presionLlantas[2] > 40) {
        println("Peligro: llanta con exceso de presion")
    } else {
        println("Presion normal")
    }

    val revisiones = arrayOf(85, 70, 95)
    val suma = revisiones[0] + revisiones[1] + revisiones[2]
    val promedio = suma / 3.0
    if (promedio >= 75) {
        println("Vehiculo aprobado en la revision tecnica")
    } else {
        println("Vehiculo no aprobado")
    }

    val bateria = Bateria("Bosch", 45)
    if (bateria.carga >= 80) {
        println("Bateria optima")
    } else if (bateria.carga >= 50) {
        println("Bateria normal")
    } else if (bateria.carga >= 20) {
        println("Bateria baja, recargar")
    } else {
        println("Cambiar bateria")
    }

    val vehiculo = Vehiculo(60, true, false)
    if (vehiculo.combustible >= 25) {
        if (vehiculo.motorRevisado) {
            if (vehiculo.pagado) {
                println("Vehiculo entregado al cliente")
            } else {
                println("El cliente no ha pagado a Rahi Ruilova")
            }
        }
    } else {
        println("Combustible insuficiente para la entrega")
    }
}
