/*Given two arrays A and B of equal size N, the task is to find if given arrays are equal or not. Two arrays are said to be equal if both of them contain same set of elements, arrangements (or permutation) of elements may be different though.
Note : If there are repetitions, then counts of repeated elements must also be same for two array to be equal.

Example 1:

Input:
N = 5
A[] = {1,2,5,4,0}
B[] = {2,4,5,0,1}
Output: 1
Explanation: Both the array can be 
rearranged to {0,1,2,4,5}*/



function check(A,B,N){
    // code here
    A.sort(function (a,b) {return a-b})
    B.sort(function (a,b) {return a-b})
    let c =0
    for(let i =0 ; i<N ; i++){
        if(A[i]==B[i]){
            c++
        }
    }
    if(c==N){
        return 1
    }else{
        return 0
    }
}