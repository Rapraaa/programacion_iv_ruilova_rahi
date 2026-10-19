type ID = string | number;
type placa = string;
type Dimensiones = [number, number];
type UbicacionTaller = {
    bahia: number;
    elevador: number;
}

const estacionamiento: UbicacionTaller = {bahia: 1, elevador: 0};
const idRepuesto : ID = 15;
const idRepuesto2 : ID = "rep-024";

type UbicacionCompleta = UbicacionTaller & {
    piso: number;
}

const bahiaTrabajo: UbicacionCompleta = {bahia: 2, elevador: 1, piso: 1};


interface Cliente {
    readonly id : number;
    nombre: string;
    email: string;
    telefono?: string;
}
interface Mecanico extends Cliente{
    especialidad:string;
}

const c1:Cliente = {
    id: 1,
    nombre: "Carlos Sanchez",
    email: "carlos.sanchez@gmail.com"
};
const c2:Cliente = {
    id: 2,
    nombre: "Maria Torres",
    email: "maria.torres@gmail.com",
    telefono: "0998765432"
};

console.log(c1);
console.log(c2);

const mecanicoJefe:Mecanico = {
    id: 3,
    nombre: "Rahi Ruilova",
    email: "rahi.ruilova@tallermecanico.ec",
    especialidad:"Jefe de Taller"
};
