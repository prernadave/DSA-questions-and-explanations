//  Problem 1

// this human is a simple function that sticks name & age to what ever this points to
// call human function here in such a way that
// the `this` object inside of the this function Actor
// gets name and age (everything that was sticked to this of the function human)

function human() {
    this.name = 'Will Smith';
    this.age = 54;
  }
  
  function Actor(movieName) {
    this.movie = movieName;
    human.call(this)
  
    // call human function here in such a way that 
    // the `this` object inside of the this function Actor
    // gets name and age (everything that was sticked to this of the function human) 
  }
  
  
  let a1 = new Actor('Aladdin');
  console.log(a1.name); // should return Will Smith
  console.log(a1.age); // should return 54
