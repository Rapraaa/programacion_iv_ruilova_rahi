fun main() {
    println("Condicional If")
    println("Condicional simple o un camino")
    var aceite = 5
    if (aceite >= 4) {
        println("Rahi puede encender el motor")
    }

    println("Condicional if-else dos caminos")
    aceite = 2
    if (aceite >= 4) {
        println("Rahi puede encender el motor")
    } else {
        println("Nivel de aceite insuficiente")
    }

    println("Condicional multiple")
    val kilometraje = 7000
    if (kilometraje >= 10000) {
        println("Mantenimiento mayor")
    } else if (kilometraje >= 5000) {
        println("Cambio de aceite y filtro")
    } else {
        println("Vehiculo en buen estado")
    }

    println("Condicional anidado")
    val bateria = 80
    val frenosOk = true
    if (bateria >= 70) {
        println("Bateria en buen estado")
        if (frenosOk) {
            println("El carro esta listo para la prueba de ruta")
        }
    }
}
