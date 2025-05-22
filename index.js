/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
  // TODO
  // Prompt the user for an array of number
  // Calculate the the length of the array of numbers
  // Print the length of the array to the console.

  //numbers = numbers.length;
  return numbers.length;
  
}
 

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
function getSum(numbers) {
  // TODO

  let sum = 0;
  for(let i = 0; i < numbers.length; i = i + 1) {
    sum = sum + numbers[i];
  }
    return sum;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
  // TODO
  let mean = 0;
  let sum = 0;
  for(let i = 0; i < numbers.length; i = i + 1) {
    sum = sum + numbers[i];
    mean = sum / numbers.length;
  }
    return mean;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
function getMin(numbers) {
   // TODO
   // Get the numbers from the numbers array (numbers[])
   // Index 0 is the first smallest number
   // Add index 0 to the variable smallestNumber
   // Analyze each element of numbers[] starting at index 0
   // If the next element in numbers[] is smaller than smallestNumber make that number smallestNumber
   // return smallest number

    let smallestNumber = numbers[0];

    for(i = 0; i < numbers.length; i = i + 1) {
      let currentNumber = numbers[i];
      if(currentNumber < smallestNumber) {
        smallestNumber = currentNumber;
        i++;
      }
      return smallestNumber;
  }
}   
  

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
  // TODO
  // Check each element in the numbers array to get the largest number
  // Set index[0] as the current number and as the largest number
  // A number can't be larger than itself so check the next number (add 1 to index)
  // If next number is larger than the current number it becomes the larger number
  // return largest number

  let largestNumber = numbers[0];
  for(i = 0; i < numbers.length; i++) {

    let currentNumber = numbers[i];
    if(currentNumber > largestNumber) {
      largestNumber = currentNumber;
    }
    return largestNumber;
}
}
/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
  // TODO
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(numbers) {
  // TODO
  // Isolate each even number as you iterate through the array
  // Create new array of even numbers.
  // This didn'throw an error but it didn't work
    
    
  for(let i = 0; i < numbers.length; i = i + 1) {
    // Go through the array of numbers 
    // If the number can be divided by 2 evenly it is an even number
    // Push the even number into a new array
    // return new array of even numbers.  
    //   let evenArray[];
    //   if(numbers[i] % 2 === 0 ) {
    //   let evenArray[] = numbers[i].push;
    //

    let evensArray = [numbers[i]];
    if(numbers[i] % 2 === 0) {
      evensArray.push[numbers];
      console.log(evensArray);
    }
    return evensArray;
  }
      
  }
    



/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {
  // TODO

  let oddsArray = [numbers[i]];
    if(numbers[i] % 2 === 0) {
      oddsArray.push[numbers];
      console.log(oddsArray);
    }
    return oddsArray;
  }
      






// === READ BUT DO NOT EDIT THE CODE BELOW ===

/**
 * @param {string} commaSeparatedNumbers
 * @returns {number[]} the string converted into an array of numbers
 */
function convertStringToNumbers(commaSeparatedNumbers) {
  // Split the string of numbers into an array of strings.
  const strings = commaSeparatedNumbers.split(",");

  // Convert the array of strings into an array of numbers
  const numbers = [];
  for (const s of strings) {
    const number = parseInt(s);
    numbers.push(number);
  }
  return numbers;
}

/**
 * Prints some descriptive statistics about the provided numbers.
 * @param {number[]} numbers
 */
function describeNumbers(numbers) {
  console.log(numbers);
  console.log(`You have given ${getLength(numbers)} numbers.`);
  console.log(`The sum of your numbers is ${getSum(numbers)}.`);
  console.log(`The mean of your numbers is ${getMean(numbers)}.`);
  console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
  console.log(`The largest of your numbers is ${getMax(numbers)}.`);
  console.log(`The range of your numbers is ${getRange(numbers)}.`);
  console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
  console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);
}

const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "28,-15,30,975,400"
);
const numbers = convertStringToNumbers(userInputString);
describeNumbers(numbers);
