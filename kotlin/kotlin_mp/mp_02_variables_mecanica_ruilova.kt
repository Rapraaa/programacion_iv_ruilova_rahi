const val MAX_VEHICULOS = 8

fun main(){
    var aceite = 4
    println(aceite)
    println("Mecanico: Rahi Ruilova")
    aceite = 3
    println("aceite")
    println(aceite)
    println("Tipos de variables en Kotlin")
    println("Tipo Integer o entero")
    var anioVehiculo: Int = 2018
    var llantas : Int = 4
    println("anioVehiculo : $anioVehiculo")
    println("llantas : $llantas")

    println("Tipo Long")
    var kilometrajeTotal: Long = 1250000000L
    println("kilometrajeTotal : $kilometrajeTotal")

    println("Tipo float")
    var combustible : Float = 32.5f
    println("combustible : $combustible")

    println("Tipo double")
    var precioRepuesto : Double = 25.50
    println("precioRepuesto : $precioRepuesto")

    println("Tipo char un caracter")
    var tipoAceite : Char = 'S'
    println("tipoAceite : $tipoAceite")

    println("Tipo String")
    var modelo : String = "Toyota Hilux"
    var placa : String = "PBA-1234"
    println("modelo : $modelo, placa : $placa")

    println("Tipo Boolean")
    var reparado : Boolean = false
    println("reparado : $reparado")

    println("Val CONST VAR")
    val mecanico = "Rahi Ruilova"
    var vehiculosEnTaller = 5
    println("mecanico : $mecanico")
    println("vehiculosEnTaller : $vehiculosEnTaller")
    println("MAX_VEHICULOS : $MAX_VEHICULOS")
}
