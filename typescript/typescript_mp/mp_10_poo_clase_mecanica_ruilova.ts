class Mecanico {
    public nombre: string;
    public experiencia: number;
    public energia: number;
    constructor (
        nombre: string,
        experiencia: number,
        energia: number,
    ){
        this.nombre = nombre;
        this.experiencia = experiencia;
        this.energia = energia;

    }
    reparar(): void {
        console.log(`${this.nombre} realiza una reparacion`)
    }
    capacitarse(): void {
        this.experiencia+=10;
        console.log(`${this.nombre} ha recibido capacitacion`)
    }
}

const rahi = new Mecanico("Rahi Ruilova", 80, 100);
const carlos = new Mecanico("Carlos Perez", 90, 100);

rahi.reparar();
console.log(carlos.experiencia);
carlos.capacitarse(); 
