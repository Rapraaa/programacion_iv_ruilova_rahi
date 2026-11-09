fun main(){
println("Operadores")
println("Operadores Aritmeticos")
var precioAceite: Double = 25.50
var precioFiltro: Double = 8.50
var total: Double = precioAceite + precioFiltro

println("Suma + : $precioAceite + $precioFiltro = ${precioAceite + precioFiltro}")
println("Suma + : $precioAceite + $precioFiltro = ${total}")
println("Resta - : $precioAceite - $precioFiltro = ${precioAceite - precioFiltro}")
println("Multiplicación * : $precioAceite * $precioFiltro = ${precioAceite * precioFiltro}")
println("Division / : $precioAceite / $precioFiltro = ${precioAceite / precioFiltro}")

println("Precedencia de los operadores aritmeticos")
println("1 ()")
println("2 *,/,%")
println("3 +,-")
val tornillos = 10+4*4+2
println("Tornillos $tornillos")
val litros = 20/5*4
println("Litros de aceite $litros")
val manoObra = 50+30/3*2-10%4
println("Mano de obra Rahi Ruilova $manoObra")

println("Operadores de Comparación")
val kilometraje = 8000
println("Igual a == ${kilometraje==5000}")
println("Diferente de != ${kilometraje!=5000}")
println("Mayor que > ${kilometraje>5000}")
println("Menor que < ${kilometraje<5000}")
println("Mayor igual >= ${kilometraje>=8000}")
println("Menor igual <= ${kilometraje<=8000}")
}
