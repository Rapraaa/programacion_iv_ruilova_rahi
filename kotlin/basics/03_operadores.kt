fun main(){
println("Operadores")
println("Operadores Aritmeticos")
var numero1: Double = 10.50
var numero2: Double = 5.50
var suma: Double = numero1 + numero2

println("Suma + : $numero1 + $numero2 = ${numero1 + numero2}")
println("Suma + : $numero1 + $numero2 = ${suma}")
println("Resta - : $numero1 - $numero2 = ${numero1 - numero2}")
println("Multiplicación - : $numero1 * $numero2 = ${numero1 * numero2}")
println("Division / : $numero1 / $numero2 = ${numero1 / numero2}")

println("Propiedades de los operadores aritmeticos jejeje")
println("1 ()")
println("2 *,/,%")
println("1 +,-")
val cristales = 10+3*5+5
println("Cristales $cristales")
val energia = 15/5*5
println("energia $energia")
val combustible = 100+20/4*3-10%3
println("Combustible $combustible")

println("Operadores de Comparación")
println("Igual a ==")

println("Diferente de == ${10!=10}")
println("Mayor que > ${5>10}")
println("Mayor que > ${15>10}")
println("Menor que < ${5<10}")
println("Menor que < ${15<10}")
println("Mayor igual >= ${10>=10}")
println("Mayor igual >= ${15>=10}")
println("Mayor igual >= ${5>=10}")
println("Menor igual >= ${10<=10}")


println("Operadores Logicos")
   println("&& and Y")
   println(" || and or")
   println("! NOT")

   val combustible = 80
   val portalActivo = true

   val puedeViajar = combustible >= 50 && portalActivo

   println("¿Puede viajar? $puedeViajar")
   println("Negado ? $negado")

   val tieneTarjeta = false
   val autorizadoPorRick = true
   val puedeEntrar = tieneTarjeta || autorizadoPorRick

   println("¿Puede entrar? $puedeEntrar")
   println("Operadores de asignacion")
   println("=, +=, -=, *=, /=, %=")

   println("Control de Nave - Rick Sanchez y Rahi Ruilova")
   val pilotoNave = "Rahi Ruilova"
   var combustibleNave = 100
   var portalesUniverso = 5
   val motorActivoNave = true

   println("Piloto: $pilotoNave")
   combustibleNave += 40
   portalesUniverso--
   println("Combustible: $combustibleNave")
   println("Portales restantes: $portalesUniverso")
   val tieneCombustible = combustibleNave >= COMBUSTIBLE_MINIMO
   val tienePortales = portalesUniverso >= 0
   val puedeViajarNave = tieneCombustible && tienePortales && motorActivoNave
   println("¿Tiene combustible? $tieneCombustible")
   println("¿Tiene portales? $tienePortales")
   println("¿Puede viajar? $puedeViajarNave")
}
