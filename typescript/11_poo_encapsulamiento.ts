//encapsulmiento
class Jedi {
    private energia: number = 200;

    rayoDeFuerza(damage: number): void {
        if (damage > 0){ 
            this.energia=Math.max(0, this.energia-damage);
        }
    }
    consultarEnergia(): number{
        return this.energia;
    }
}

const luck = new Jedi();
luck.rayoDeFuerza(150);
console.log(luck.consultarEnergia());
