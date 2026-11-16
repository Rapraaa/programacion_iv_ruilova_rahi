fun main() {
    for (i in 1..5) {
        println("Revisando vehiculo $i")
    }

    for (i in 10 downTo 5) {
        println("Cuenta regresiva de entrega $i")
    }

    for (i in 1..20 step 2) {
        println("Ajustando tornillo $i")
    }

    println("Tabla de precios de aceite (litro a 6)")
    for (i in 1..10) {
        val resultado = 6 * i
        println("6 * $i = $resultado")
        println("6 * $i = ${i * 6}")
    }
}
