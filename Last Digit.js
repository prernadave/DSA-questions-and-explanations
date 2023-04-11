/*The last digit

Description
You are given a number stored in a variable, with the namenumber
Check whether the last digit of the number is divisible by 3 or not.
If it is divisible by 3, then print "Divisible".
Otherwise "Not Divisible".
Input
The first and the only line of the input contains the number stored in the variablenumber
Constraints
1 <= N <= 99999
Output
If the value stored innumber, is divisible then printDivisible, else printNot Divisible
Sample Input 1 
126
Sample Output 1
Divisible
Hint
number = 126
the last digit of the number is 6
we know that6 is divisible by 3
thus, the output will beDivisible*/

function theLastDigit(number) {
    // Write code here
     var myArr = String(number).split("").map((number)=>{
      return Number(number);
    });
    
    let last= myArr.length-1;
    
   if(myArr[last]%3===0){
       console.log("Divisible")
   }else{
       console.log("Not Divisible")
   }
}