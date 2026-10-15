class Boxeador {
    golpear(): void{ 
        console.log("Golpe basico");
    }
};

class Rocky extends Boxeador {
    golpeEspecial():void {
        console.log("Rocky lanza un poderoso gancho");
    }
};

class Apollo extends Boxeador {
    golpeRapido(): void{
        console.log("Apollo lanza un jab veloz");
    }
};

const rocky = new Rocky();
rocky.golpear();
rocky.golpeEspecial();
const apolloCreek = new Apollo();
apolloCreek.golpear();
apolloCreek.golpeRapido();

class Guerrero {
    atacar(): void {
        console.log("El guerrero realiza un ataque");
    }
}

class Goku extends Guerrero {
    kamehameha(): void {
        console.log("Gokuy lanza un poderoso kamehameha");
    }
}

class Vegeta extends Guerrero {
    finalFlash(): void {
        console.log("Hey muy buenas a todos guapisimos aqui vegetta");
    }
}

const guerrero = new Guerrero();
const goku = new Goku();
const vegetta = new Vegeta();
goku.atacar();
goku.kamehameha();
vegetta.finalFlash();
vegetta.atacar();
guerrero.atacar();