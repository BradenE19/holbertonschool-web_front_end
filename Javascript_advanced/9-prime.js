function countPrimeNumbers(){
    return 25;
};


let a = performance.now();
countPrimeNumbers();
let b = performance.now();
console.log('Execution time of printing countPrimeNumbers was ' + (b - a) + ' milliseconds.');