let firstSubjects = ["Math", "English", "Programming"];
let secondSubjects = ["Geography", "Spanish", "Programming"];

// Pakai 2 Cara

// Cara 1
function findCommon(x, y) {
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < y.length; i++) {
      if (x[i] == y[i]) {
        return true;
      }
    }
  }
  return false;
}

console.log(findCommon(firstSubjects, secondSubjects));

// Cara 2
console.log(firstSubjects.some((e) => secondSubjects.includes(e)));
