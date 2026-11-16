fun main() {
    val servicio = 3
    when (servicio) {
        1 -> println("Servicio: Cambio de aceite")
        2 -> println("Servicio: Alineacion y balanceo")
        3 -> println("Servicio: Cambio de frenos")
        else -> println("Servicio no disponible")
    }

    print("Ingrese el dia (1-7): ")
    val dia = readLine()!!.toInt()
    when (dia) {
        1, 2, 3, 4, 5 -> println("Taller abierto")
        6 -> println("Taller abierto medio dia")
        7 -> println("Taller cerrado")
        else -> println("Dia no valido")
    }

    print("Ingrese el porcentaje de desgaste de las pastillas: ")
    val desgaste = readLine()!!.toInt()
    when (desgaste) {
        in 0..39 -> println("Pastillas en buen estado")
        in 40..79 -> println("Pastillas con desgaste medio")
        in 80..100 -> println("Cambiar pastillas")
        else -> println("Valor no valido")
    }

    val presupuesto = 120
    val repuestoDisponible = true
    val costoReparacion = 90
    /* when sin argumento con condiciones */
    when {
        presupuesto >= costoReparacion && repuestoDisponible -> {
            val restante = presupuesto - costoReparacion
            println("Reparacion autorizada por Rahi Ruilova")
            println("Saldo restante $restante")
        }
        presupuesto < costoReparacion && repuestoDisponible -> {
            println("Presupuesto insuficiente")
        }
        !repuestoDisponible -> {
            println("No hay repuesto en stock")
        }
    }
}
