const number = 9
for (i = 1; i < 11; i++){
    const table = i * number;
    console.log(`${number} * ${i} = ${table}`);
}

for(let numberB = 1; numberB <= 10; numberB++) {
    for (f = 1; f < 11; f++){
    const tableB = f * numberB;
    console.log(`${numberB} * ${f} = ${tableB}`);
    }
}