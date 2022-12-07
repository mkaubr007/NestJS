//* Q1) Write a function which takes a sorted array and implement Binary search on it.

function binarySearch(arr: number[], x: number) {
  let length = 0;
  let round = arr.length - 1;
  let midTerm;
  while (round >= length) {
    midTerm = length + Math.floor((round - length) / 2);

    if (arr[midTerm] == x) return midTerm;

    if (arr[midTerm] > x) round = midTerm - 1;
    else length = midTerm + 1;
  }

  return -1;
}

const arr: number[] = new Array(1, 2, 3, 25, 50);
const x: number = 25;
const n: number = arr.length;
const result: number = binarySearch(arr, x);

result == -1
  ? console.log("Element is not present in array")
  : console.log("Element is present at index " + result);
