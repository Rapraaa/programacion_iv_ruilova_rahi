fun main() {
    val presiones = arrayOf(30, 32, 28, 35, 31)
    println(presiones[0])
    println(presiones[2])
    println(presiones[4])
    presiones[4] = 40
    println(presiones[4])
    for (presion in presiones) {
        println("Presion de llanta $presion PSI")
        val presionDoble = presion * 2
        println("Presion doble (eje) $presionDoble")
        if (presionDoble >= 70) {
            val presionReducida = presionDoble - 10
            println("Presion Reducida : $presionReducida")
        }
    }
}
