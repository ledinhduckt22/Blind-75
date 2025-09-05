// Description: Given an array of integers numbers, determine whether the array contains any duplicate values. A duplicate is defined as any number that appears more than once in the array.

const checkDuplicateArr = (numbers) => {
  const checkedValue = {};

  for (let i = 0; i < numbers.length; i++) {
    if (checkedValue.hasOwnProperty(numbers[i])) {
      return true;
    } else {
      checkedValue[numbers[i]] = 0;
    }
  }

  return false;
};

// C2: Sử dụng Set

// const checkDuplicateArr = (numbers) => {
//   const checkedValue = new Set();

//   for (let i = 0; i < numbers.length; i++) {
//     if (checkedValue.has(numbers[i])) {
//       return true;
//     }
//     checkedValue.add(numbers[i]);
//   }

//   return false;
// };

// C3: Sử dụng Sort
// const checkDuplicateArr = (numbers) => {
//   numbers.sort((a, b) => a - b)

//   for (let i = numbers.length - 1; i > 0; i--) {
//     if (numbers[i] === numbers[i - 1]) {
//       return true;
//     }
//   }

//   return false;
// };
