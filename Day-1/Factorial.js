// problem statement 
// Given an integer "n" find the factorial of that integer

function factorial(number) {
    let result=1;
    for(let i =2; i<=number ;i++){
        result = result*i
         
    }
   return result
}

console.log(factorial(6));  //720
console.log(factorial(0)); //1

// Big O ====> O(n)