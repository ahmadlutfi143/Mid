function prime(number) {
    let primes = [];

    for(let i = 2; i; i++) {
        let isPrime = true;
        for(let j = 2; j < i; j++) {
            if(i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if(isPrime) primes.push(i);
        if(primes.length === number) break;
    }

    return primes.join(',');
}

console.log(prime(30));