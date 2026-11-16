data class Auto(
    val modelo: String,
    val kilometraje: Int
)

fun main() {
    var ingresoTotal = 0.0
    println("Ingresos de mantenimientos")
    for (mantenimiento in 1..6) {
        val costoOriginal = mantenimiento * 30
        var descuento = 0.0

        if (costoOriginal >= 120) {
            descuento = costoOriginal * 0.15
        }

        val costoFinal = costoOriginal - descuento
        println("Mantenimiento $mantenimiento")
        println("Costo original: $costoOriginal")
        println("Descuento aplicado: $descuento")
        println("Costo final: $costoFinal")
        ingresoTotal += costoFinal
    }
    println("Ingreso total del taller %.2f dolares".format(ingresoTotal))

    val autos = arrayOf(
        Auto("Chevrolet Aveo", 3000),
        Auto("Kia Rio", 8500),
        Auto("Toyota Hilux", 15000),
        Auto("Mazda BT-50", 42000),
        Auto("Hyundai Accent", 4500),
        Auto("Rahi", 9000),
        Auto("Ruilova", 25000)
    )

    val limiteGarantia = 20000
    for (auto in autos) {
        println("Auto: ${auto.modelo}")
        println("Kilometraje: ${auto.kilometraje}")
        when {
            auto.kilometraje < 5000 -> {
                println("Estado: NUEVO")
                println("No necesita mantenimiento")
            }
            auto.kilometraje < 10000 -> {
                println("Estado: CAMBIO DE ACEITE")
            }
            auto.kilometraje < 30000 -> {
                println("Estado: MANTENIMIENTO PREVENTIVO")
            }
            else -> {
                println("Estado: MANTENIMIENTO MAYOR")
            }
        }
        if (auto.kilometraje <= limiteGarantia) {
            val restante = limiteGarantia - auto.kilometraje
            println("En garantia")
            println("Kilometros de garantia restantes: $restante")
        }
    }
}
