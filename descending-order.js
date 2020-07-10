// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 21445 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

// Test cases:
// Test.assertEquals(descendingOrder(0), 0)
// Test.assertEquals(descendingOrder(1), 1)
// Test.assertEquals(descendingOrder(123456789), 987654321)

function descendingOrder(n){
  // 1. Convert n to an array with individual numbers
  
  let digits = n.toString().split('');
  let realDigits = digits.map(Number);
  let temp;
  let result;
  
  // 2. Loop over the array, and sort by descending order
  for (let j = 0; j < realDigits.length; j++) {
    for (let i = 0; i < realDigits.length; i++) {
      while (realDigits[i] < realDigits[i + 1]) {
        temp = realDigits[i + 1];
        realDigits[i + 1] = realDigits[i];
        realDigits[i] = temp;
      }
    }
  }
  
  for (let i = 0; i < realDigits.length; i++) {
    realDigits[i] = realDigits[i].toString();
    realDigits[0] += realDigits[i + 1];
   };
  
  result = parseInt(realDigits[0])
  return result;
};