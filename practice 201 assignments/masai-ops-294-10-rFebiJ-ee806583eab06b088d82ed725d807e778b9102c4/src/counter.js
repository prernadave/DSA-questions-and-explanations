class Counter {
  // Write your code here
  constructor(value=0){
    this.value = value;
  }
  getValue(){
   return this.value;
   
  }

  addValue(x){
 this.value += x;
  }

  reduceValue(x){
 this.value-=x;
  }

  resetValue(){
   this.value=0
  }


   
  // Complete this Counter class as per the problem statement
}

// Do not change this
export default Counter;
