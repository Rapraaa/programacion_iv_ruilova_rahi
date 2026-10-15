abstract class Boxeador {
    abstract atacar(): void;
    descansar(): void{
        console.log("El boxeador duerme rico")
    }
};

class Rocky extends Boxeador{
    atacar(): void {
        console.log("Rocky tira un quinio")
    }
}

class Apollo extends Boxeador{
    atacar(): void {
        console.log("Apollo se come una naranja")
    }
}

const boxeadores: Boxeador[]=[
    new Rocky(),
    new Apollo()
]

console.log(boxeadores);
boxeadores.forEach(boxeador=>boxeador.atacar());


//Exercise sexy
abstract class Sayayin{
    abstract transformarse(): void;
    detectarKi(): void {
        console.log("detectando el nivel de energia de el enemigo");
    }
}

class Goku extends Sayayin{
    transformarse(): void {
        console.log("Goku se transforma en super sayayin azulinho");
    }
}

class Vegetta extends Sayayin{
    transformarse(): void {
        console.log("Vegeta alcan<za el super lego");
    }
}

const sayayinsitos: Sayayin[]=[
    new Goku(),
    new Vegetta()
]

console.log(sayayinsitos);
sayayinsitos.forEach(sayayinsitos=>sayayinsitos.transformarse());
