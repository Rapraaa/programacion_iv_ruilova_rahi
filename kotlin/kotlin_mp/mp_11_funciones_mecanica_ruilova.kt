fun encenderMotor() {
    println("Encendiendo motor")
    println("Revisando tablero")
    println("3")
    println("2")
    println("1")
    println("Rahi Ruilova encendio el motor")
}

fun cambiarAceite(vehiculo: String, cambios: Int, litros: Int) {
    println("Cambio de aceite a $vehiculo")
    val total = cambios * litros
    println("Litros totales usados: $total")
}

fun calcularDescuento(precio: Double): Double {
    var descuento = 0.0
    if (precio >= 100) {
        descuento = precio * 0.10
    }
    return descuento
}

fun calcularCostoTotal(costos: Array<Int>): Int {
    var total = 0
    for (costo in costos) {
        total += costo
        if (costo >= 100) {
            println("Repuesto costoso $costo")
        }
    }
    return total
}

fun main() {
    encenderMotor()
    cambiarAceite("Toyota Hilux", 2, 5)
    cambiarAceite("Kia Rio", 3, 4)
    val descuentoCliente = calcularDescuento(150.0)
    println("El cliente Rahi Ruilova tiene este descuento: $descuentoCliente")
    val costosRepuestos = arrayOf(25, 60, 120, 45, 150)
    println("Costo total de repuestos ${calcularCostoTotal(costosRepuestos)}")
}
