function showPrimes(limit) {
    for (let i = 2; i <= limit; i++) {
        let isPrime = true
        for (let j = 2; j < i; j++) {
            if (i % j === 0 && i !== j) {
                isPrime = false
            }
        }
        if (isPrime === true) {
            console.log(i);
        }
    }
}

showPrimes(20)