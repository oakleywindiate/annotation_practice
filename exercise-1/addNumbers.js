// Declare a function called addNumbers,

function addNumbers() {

// Declare two variables firstNum and secondNum
  var firstNum = 9
  var secondNum = 14

// Reassign the firstNum to a value of 3
  firstNum = 3
// Reassign the secondNum to a value of 4
  secondNum = 4
//Declare a new variable, 'nums', and assign it to an array of firstNum and secondNum
  var nums = [firstNum, secondNum]

// Declare a variable called product and assign it
  var product = firstNum * secondNum
  var sum = firstNum + secondNum
  var average = sum / nums.length

// log to the console the first value in the nums array
  console.log(nums[0])
  console.log(nums[1])
// log the console a string value with num1 and num2 interpolated
  console.log(`The first number is ${num1} and the second number is ${num2}!`)
//
  return sum
}
