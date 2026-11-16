fun calcularTotal(costos: List<Int>): Int {
    var total = 0
    for (costo in costos) {
        total += costo
        if (costo > 150) {
            println("Herramienta costosa $costo")
        }
    }
    return total
}

fun main() {
    val servicios = listOf("Cambio de aceite", "Alineacion", "Frenos") // solo lectura
    var iteracion = 1
    for (servicio in servicios) {
        println("Servicio $iteracion : $servicio")
        iteracion++
    }

    val costos = listOf(120, 160, 200, 80, 95)
    val total = calcularTotal(costos)
    println("Costo total de herramientas de Rahi Ruilova: $total")
}
