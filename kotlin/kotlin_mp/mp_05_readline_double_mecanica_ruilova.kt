fun main() {
    println("Orden de trabajo - Taller Ruilova")
    println("¿Nombre del cliente?")
    val cliente = readLine()
    println("Cantidad de repuestos:")
    val repuestos = readLine()!!.toInt()
    println("Precio por repuesto:")
    val precio = readLine()!!.toDouble()
    println("Mano de obra:")
    val manoObra = readLine()!!.toDouble()
    println("Dinero del cliente:")
    val pago = readLine()!!.toDouble()

    val costoRepuestos = repuestos * precio
    val costoTotal = costoRepuestos + manoObra
    val cambio = pago - costoTotal

    println("Reporte")
    println("Cliente: $cliente")
    println("Mecanico: Rahi Ruilova")
    println("Costo repuestos: $costoRepuestos")
    println("Costo total: $costoTotal")
    println("Cambio: $cambio")
}
