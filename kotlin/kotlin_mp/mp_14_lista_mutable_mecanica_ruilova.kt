fun main() {
    val vehiculos = mutableListOf("Toyota Hilux", "Kia Rio", "Chevrolet Aveo")

    var opcion: Int?
    do {
        println("\nTaller de Ruilova Rahi")
        println("1. Agregar vehiculo")
        println("2. Mostrar vehiculos")
        println("3. Modificar vehiculo")
        println("4. Entregar vehiculo")
        println("5. Salir")
        print("Seleccione una opcion: ")
        opcion = readLine()?.toIntOrNull()

        when (opcion) {
            1 -> {
                print("Modelo del vehiculo: ")
                val modelo = readLine() ?: ""
                if (modelo.isNotBlank()) {
                    vehiculos.add(modelo)
                    println("Vehiculo ingresado al taller")
                } else {
                    println("El modelo no puede estar vacio")
                }
            }
            2 -> {
                println("Vehiculos en el taller:")
                for ((i, vehiculo) in vehiculos.withIndex()) {
                    println("[$i] Vehiculo: $vehiculo")
                }
            }
            3 -> {
                println("Actualizar")
                print("Indice a modificar: ")
                val indice = readLine()?.toIntOrNull()
                if (indice != null && indice in vehiculos.indices) {
                    print("Nuevo modelo: ")
                    val nuevoModelo = readLine() ?: ""
                    if (nuevoModelo.isNotBlank()) {
                        vehiculos[indice] = nuevoModelo
                        println("Vehiculo actualizado")
                    } else {
                        println("Modelo no valido")
                    }
                } else {
                    println("Indice no valido")
                }
            }
            4 -> {
                println("Entregar")
                print("Indice a entregar: ")
                val indice = readLine()?.toIntOrNull()
                if (indice != null && indice in vehiculos.indices) {
                    vehiculos.removeAt(indice)
                    println("Vehiculo entregado")
                } else {
                    println("Indice no valido")
                }
            }
            5 -> println("Saliendo...")
            else -> println("Opcion no valida")
        }
    } while (opcion != 5)
}
