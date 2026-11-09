fun main() {
    println("Inputs de terminal readline")
    println("Como te llamas")


    val nombre = readLine()

    println("Welcome a otro universo : $nombre")


    println("Cristales de Rahi")
    val cristalesRahi = readLine()!!.toInt()
    println("Cristales de Morty")
    val cristalesMorty = readLine()!!.toInt()
    val total = cristalesRahi+cristalesMorty
    println("Total de cristales: $total")


    println("Calculadora de Energia")
    val energiaInicial = readLine()!!.toInt()
    println("Energia Cinsumida: ")
    val energiaConsumida = readLine()!!.toInt()
    val energiaRestante = energiaInicial- energiaConsumida
    println("Energia Restante: $energiaRestante")



}
