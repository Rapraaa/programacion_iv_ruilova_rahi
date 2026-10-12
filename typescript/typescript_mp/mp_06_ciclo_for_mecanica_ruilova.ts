//Ciclo for
for (let i = 0; i < 5; i++) {
    console.log(`Revision del auto: ${i}`);
}

for (let i = 2; i < 50; i+= 5) {
    console.log(`Revision del auto: ${i}`);
}

for (let i = 40; i > 0; i-= 5) {
    console.log(`Revision del auto: ${i}`);
}

for (let i = 40; i > 0; i-= 5) {
    if (i === 20) {
        console.log(`Revision del auto ha terminado`);
    } else if (i === 30) {
        console.log(`Revision del auto ha sido interrumpida`);
    }
    else {
        console.log(`Revision del auto: ${i}`);
    }
}