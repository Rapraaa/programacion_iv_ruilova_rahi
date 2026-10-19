//encapsulamiento
class BateriaVehiculo {
    private carga: number = 200;

    consumirCarga(descarga: number): void {
        if (descarga > 0){ 
            this.carga=Math.max(0, this.carga-descarga);
        }
    }
    consultarCarga(): number{
        return this.carga;
    }
}

const bateria = new BateriaVehiculo();
bateria.consumirCarga(150);
console.log(bateria.consultarCarga());
