// Soal No. 1
const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];

function reverse(arr) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    array.push(arr[i]);
  }
  return array.reverse();
}

const newArr = reverse(arr);
const newArr2 = reverse(arr2);
console.log(arr, newArr);
console.log(arr2, newArr2);

//Soal No.2
const arr3 = [1, 3, 4, 1, 2, 8];
const arr4 = [5, 6, 7, 8, 1, 3];

function getAverage(arr) {
  const average = arr.reduce((a, b) => a + b) / arr.length;
  return arr.filter((i) => i > average).length;
}

console.log(getAverage(arr3));
console.log(getAverage(arr4));

//Soal No.3
const arr5 = [[10], [9, 7, 1], [2, 8]];

function searchInArray(arr, num) {
  let newArray = [].concat(...arr);
  if (newArray.includes(num)) {
    return newArray.indexOf(num);
  } else return null;
}

console.log(searchInArray(arr5, 3));
console.log(searchInArray(arr5, 2));
console.log(searchInArray(arr5, 4));
console.log(searchInArray(arr5, 8));
