function countPrimeNumbers(){
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
        if (sieve == true) {
            max++
        }
    }
}


const a = performance.now();
countPrimeNumbers();
const b = performance.now();
const elapsed = a - b
console.log('Execution time of printing countPrimeNumbers was ' + elapsed + ' milliseconds.');