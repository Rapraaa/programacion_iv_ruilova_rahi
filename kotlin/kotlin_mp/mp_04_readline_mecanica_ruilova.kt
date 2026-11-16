fun main() {
    println("Inputs de terminal readline")
    println("Nombre del cliente:")
    val cliente = readLine()
    println("Bienvenido al Taller Ruilova : $cliente")

    println("Litros de aceite del motor")
    val litrosMotor = readLine()!!.toInt()
    println("Litros de aceite de la caja")
    val litrosCaja = readLine()!!.toInt()
    val totalLitros = litrosMotor + litrosCaja
    println("Total de litros: $totalLitros")

    println("Control de kilometraje")
    println("Kilometraje de entrada:")
    val kmEntrada = readLine()!!.toInt()
    println("Kilometraje de la prueba de ruta:")
    val kmPrueba = readLine()!!.toInt()
    val kmSalida = kmEntrada + kmPrueba
    println("Kilometraje de salida: $kmSalida")
}
