interface ParticipanteTorneo {
    nombre: string;
    nivelPoder : number;
    presentarTecnica():void;
}

class Goku implements ParticipanteTorneo{
    nombre= "Goku";
    nivelPoder: 90000;
    presentarTecnica(): void {
        console.log("Goku usa el jamehameha")
    }
}


class Vegetta implements ParticipanteTorneo{
    nombre= "Veghetta";
    nivelPoder: 90001232130;
    presentarTecnica(): void {
        console.log("vegetta usa el 777")
    }
}

const goku = new Goku();
const vegetta = new Vegetta();

goku.presentarTecnica();
vegetta.presentarTecnica();