// 1 - masala

// Write a method that, given two arguments, width and height, returns a string representing a rectangle with those dimensions.

// The rectangle should be filled with spaces, and its borders should be composed of asterisks (*).

// For example, given width = 3 and height = 3:

// ***
// * *
// ***
// End each line of the string (including the last one) with a carriage return-line feed combination.

// Note: You may assume that width and height will always be greater than zero.

// function getRectangleString(width, height) {
//   let result = "";
//   for (let i = 0; i < height; i++) {
//     for (let j = 0; j < width; j++) {
//       if (i === 0 || j === width - 1 || i === height - 1 || j === 0) {
//         result += "*";
//       } else {
//         result += " ";
//       }
//     }
//     result += "\r\n";
//   }
//   return result;
// }
// console.log(getRectangleString(3, 3));
// console.log(getRectangleString(3, 4));

// 2 - masala

// Overview
// Bubblesort is an inefficient sorting algorithm that is simple to understand and therefore often taught in introductory computer science courses as an example how not to sort a list. Nevertheless, it is correct in the sense that it eventually produces a sorted version of the original list when executed to completion.

// At the heart of Bubblesort is what is known as a pass. Let's look at an example at how a pass works.

// Consider the following list:

// 9, 7, 5, 3, 1, 2, 4, 6, 8
// We initiate a pass by comparing the first two elements of the list. Is the first element greater than the second? If so, we swap the two elements. Since 9 is greater than 7 in this case, we swap them to give 7, 9. The list then becomes:

// 7, 9, 5, 3, 1, 2, 4, 6, 8
// We then continue the process for the 2nd and 3rd elements, 3rd and 4th elements ... all the way up to the last two elements. When the pass is complete, our list becomes:

// 7, 5, 3, 1, 2, 4, 6, 8, 9
// Notice that the largest value 9 "bubbled up" to the end of the list. This is precisely how Bubblesort got its name.

// Task
// Given an array of integers, your function should return a new array equivalent to performing exactly 1 complete pass on the original array. Your function should be pure, i.e. it should not mutate the input array.

// function bubblesortOnce(a) {
//   // TODO
//   let b = [...a]
//   for(let i = 0; i < b.length; i++){
//     if(b[i] > b[i + 1]){
//       let temp = b[i+1]
//       b[i + 1] = b[i]
//       b[i] = temp
//     }
//   }
//   return b
// }
// console.log(bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8]));

// 3 - masala

// Don't give me five!
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!

// I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

// function dontGiveMeFive(start, end) {
//   let x = 0;
//   while (start <= end) {
//     if (!start.toString().includes("5")) {
//       x++;
//     }
//     start++;
//   }
//   return x;
// }
// console.log(dontGiveMeFive(1, 9));
// console.log(dontGiveMeFive(4, 17));
