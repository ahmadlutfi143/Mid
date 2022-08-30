function fibbo(number) {
    let fibbos = [];

    for(let i  = 0; i < number; i++) {
        if(i === 0 || i === 1) fibbos.push(i);

        if(i > 1) fibbos[i] = fibbos[i-1] + fibbos[i-2];
    }

    return fibbos.join(',');
}

console.log(fibbo(13));