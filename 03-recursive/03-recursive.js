// Soal No. 1
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];

function sumOfArray(arr) {
  return arr.length === 0 ? 0 : arr[0] + sumOfArray(arr.slice(1));
}
console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));

// Soal No. 2
const avg1 = sumOfArray(arr1) / arr1.length;
const avg2 = sumOfArray(arr2) / arr2.length;

function countAboveAvg(arr, avg) {
  return arr.filter((e) => e >= avg).length;
}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);

// Soal No.3
const arr = [1, 2, 3, 4, 5];
function searchInArray(arr, num) {
  if (arr.length === 0) {
    console.log(`Angka tidak ditemukan`);
  } else if (arr[arr.length - 1] === num) {
    console.log(`Angka ditemukan pada index ke-${arr.length - 1}`);
  } else {
    searchInArray(arr.slice(0, arr.length - 1), num);
  }
}

searchInArray(arr, 6);
searchInArray(arr, 1);
searchInArray(arr, 8);
