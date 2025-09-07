// Description: Given a positive integer num, determine the number of set bits (1s) present in the binary representation of the given number, commonly referred to as the Hamming weight.

// C1: Split 2 and count if remainder is one
// function countOnesInBinary(num) {
//   if (num <= 1) {
//     return num;
//   }

//   let result = 0;

//   while (num) {
//     const remainder = num % 2;

//     if (remainder) {
//       result++;
//     }

//     num = Math.floor(num / 2);
//   }

//   return result;
// }

// C2: Kiểm tra the last bit xem có phải 1 hay không -> dịch dãy bit sang phải 1 số (chia cho 2)
function countOnesInBinary(num) {
  let result = 0;

  while (num) {
    result += num & 1;
    num = num >> 1;
  }

  return result;
}
