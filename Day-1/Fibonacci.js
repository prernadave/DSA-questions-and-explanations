/*Given a number "n" find the first "n" elements of 
the fibonacci sequence*/

/*Fibonacci is a sequence in which each number is a sequence
of the two preceding ones*/

// the first two numbers in the sequence are 0 and 1

function fibonacci(number){
    const fib= [0,1];
    for (let i =2; i<number ; i++){
        fib[i]= fib[i-1] + fib[i-2]
    }
    return fib
}

console.log(fibonacci(5)); //[ 0, 1, 1, 2, 3 ]

// time complexity =>o(n) - linear