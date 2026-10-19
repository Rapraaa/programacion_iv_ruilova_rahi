class Boxeador {
    atacar(): void{ 
        console.log("Golpe basico");
    }
};

class Rocky extends Boxeador {
    override atacar():void {
        console.log("Rocky lanza un poderoso gancho");
    }
};

class Apollo extends Boxeador {
    override atacar(): void{
        console.log("Apollo lanza un jab veloz");
    }
};

const boxeadores: Boxeador[]=[
    new Rocky(),
    new Apollo()
]

boxeadores.forEach(boxeador=>boxeador.atacar());