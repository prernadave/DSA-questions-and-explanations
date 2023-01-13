/*Take a variable with name num and it should contain a 3 digit number of number data type and not string . Perform the following task:

Reverse the number by creating a reverse() function.
Check if the number after reversing is palindrome or not. */

function Reverse(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
let num = 121;  //121
let reversed=(Reverse(num));

// -------------------------------------------------------------------------------------------
 num=num+"";
 let c;
for(let i=0;i<num.length;i++){
    if(num==Reverse(num)){
       c=0
    }else{
        c=1
    }

}
if (c==0) {
    console.log("yes");
} else {
   console.log("no");
}