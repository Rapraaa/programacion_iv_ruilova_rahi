//Ciclo for
for (let i = 0; i < 5; i++) {
    console.log(`Entrenamiento jedi: ${i}`);
}

for (let i = 2; i < 50; i+= 5) {
    console.log(`Entrenamiento jedi: ${i}`);
}

for (let i = 40; i > 0; i-= 5) {
    console.log(`Entrenamiento jedi: ${i}`);
}

for (let i = 40; i > 0; i-= 5) {
    if (i === 20) {
        console.log(`Entrenamiento jedi ha terminado`);
    } else if (i === 30) {
        console.log(`Entrenamiento jedi ha sido interrumpido`);
    }
    else {
        console.log(`Entrenamiento jedi: ${i}`);
    }
}

const jedis: Jedi[] = [ 
    { nombre: "Luke Skywalker", nivelFuerza: 100, tieneSable: true},
    { nombre: "Darth Vader", nivelFuerza: 90, tieneSable: true},
    { nombre: "Leia Organa", nivelFuerza: 80, tieneSable: false},
    { nombre: "Han Solo", nivelFuerza: 70, tieneSable: false},
    { nombre: "Yoda", nivelFuerza: 120, tieneSable: true}
];

for (const jedi of jedis) {
    console.log(`Jedi: ${jedi.nombre}, Nivel de fuerza: ${jedi.nivelFuerza}, Tiene sable: ${jedi.tieneSable}`)
}

const planetas: Record<string, number> = {
    "Tatooine": 1000,
    "Hoth": 500,
    "Endor": 800
};
const distancias: Record<string, number> = {
    "Tatooine": 1000,
    "Hoth": 500,
    "Endor": 800
}
for (const planeta in planetas) {
    console.log(`planeta ${planeta}, Distancia: ${distancias[planeta]} `)
}

const criaturasStarWars: string[]= ["Wampa", "Tauntaun", "Rancor", "Pepianos"];
criaturasStarWars.forEach((criatura, index) => {
    console.log(`Criatura ${index+1}: ${criatura}`);
});

criaturasStarWars.map((criatura, index) => {
    console.log(`Criatura ${index+1}: ${criatura}`);
});