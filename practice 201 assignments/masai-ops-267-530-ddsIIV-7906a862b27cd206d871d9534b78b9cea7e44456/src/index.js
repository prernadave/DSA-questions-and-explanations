function studentData(firstName, LastName, age, marksArray, ...hobbies) {

  return {
    fullName: `${firstName} ${LastName}`,
    age: age,
    hobbies: hobbies,
    // Vivek Agarwal's age is 38."

    getInfo: function () {
      return `${firstName} ${LastName}'s age is ${age}.`
    },

    getResult: function () {
      let sum = 0
      let avg;
      for (let i = 0; i < marksArray.length; i++) {
        sum += marksArray[i];
        avg = sum / marksArray.length

      }
      if (avg >= 50) {
        return 'Result: PASS'
      } else {
        return 'Result: FAIL'
      }
    }

  }
}
studentData('Vivek', 'Agarwal', 38, [50, 60, 70], 'Singing', 'Coding', 'Meditating')
studentData('Vivek', 'Agarwal', 38, [50, 60, 70], 'Singing', 'Coding', 'Meditating').getInfo()
studentData('Vivek', 'Agarwal', 38, [50, 60, 70], 'Singing', 'Coding', 'Meditating').getResult()







export { studentData }

// Reverse a Binary tree 2. Modified Zigzag traversal of a tree 3. Hotel Booking system design
// Technical interview contains basic questions from DS algo and basic JavaScript
// 1. Write Binary Search
// 2. question was related to setTimeout and setTimeinterval
// 3. basic DOM manipulation.
// rest were all related to projects mentioned in the CV.
// What is hoisting in javascript

// HTML tags and CSS properties

// What is init in python. Difference between classes and objects. Different types of data types. One coding question in javascript and a program to print pallindrome.